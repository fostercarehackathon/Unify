using EmpoweringYouth.Context;
using EmpoweringYouth.Models;
using EmpoweringYouth.Models.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace EmpoweringYouth.Controllers
{
    [RoutePrefix("api/conversations")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ConversationsController : ApiController
    {

        [HttpGet]
        [Route("{conversationId:int}")]
        public IHttpActionResult GetConversation(int conversationId)
        {

            var requestUser = ControllerUtils.GetUserFromRequest(Request);
            using (var ctx = new EmpoweringYouthContext())
            {
                var persistenUser = ctx.users.Find(requestUser.Id);
                var conversation = ctx.conversations.Include("To").Include("From").Include("Messages").Include("Messages.From").Include("Messages.To").
                Where(conv => conv.Id == conversationId && (conv.From.Id == requestUser.Id || conv.To.Id == requestUser.Id)).FirstOrDefault();

                if (conversation == null)
                {
                    return BadRequest("You are not allowed to view this conversation!");
                }

                ConversationData c = new ConversationData();
                c.From = conversation.From;
                c.To = conversation.To;
                c.StartedDate = conversation.StartedDate;
                c.ReplyIn = conversation.ReplyIn;
                c.Subject = conversation.Subject;
                c.messages = conversation.Messages.OrderByDescending(m => m.Date).ToList();
                return Ok(c);
            }
        }

        [HttpGet]
        public List<ConversationData> GetConversations([FromUri] Status status = Status.ALL, [FromUri] int start = 0, [FromUri] int end = 20)
        {
            var requestUser = ControllerUtils.GetUserFromRequest(Request);
            List<ConversationData> conversationsData = new List<ConversationData>();

            using (var ctx = new EmpoweringYouthContext())
            {
                var persistenUser = ctx.users.Find(requestUser.Id);
                var conversations = ctx.conversations.Include("To").Include("From").Where(c => (c.To.Id == requestUser.Id || c.From.Id == requestUser.Id)).OrderByDescending(c => c.StartedDate);
                
                if (status == Status.ALL)
                {
                    var paginatedConversations = conversations.Skip(start).Take(end - start).ToList();

                    foreach (Conversation c in paginatedConversations)
                    {
                        conversationsData.Add(new ConversationData
                        {
                            Id = c.Id,
                            From = c.From,
                            To = c.To,
                            LastMessageDate = c.LastMessageDate,
                            Subject = c.Subject,
                            StartedDate = c.StartedDate,
                            messages = c.Messages.OrderByDescending(m => m.Date).ToList()
                        });
                    }

                    return conversationsData;
                }


                //conversations.Where(c => c.Messages.First().Status == status).OrderByDescending(c => c.StartedDate).Skip(start).Take(end - start).ToList();

                List<Conversation> readConversations = new List<Conversation>();
                List<Conversation> unreadConversations = new List<Conversation>();

              //  List<Conversation> filteredConversations = conversations.Where(c => c.Messages.First().Status == status).ToList();

                foreach (Conversation c in conversations) {
                    foreach (Message m in c.Messages) {
                        if (m.To.Id.Equals(requestUser.Id) && m.Status.Equals(Status.UNREAD)) {
                            unreadConversations.Add(c);
                            continue;
                        }
                    }

                    readConversations.Add(c);
                }

                List<Conversation> filteredConversations = status.Equals(Status.READ) ? readConversations.Skip(start).Take(end - start).ToList() : unreadConversations.Skip(start).Take(end - start).ToList();

                foreach (Conversation c in filteredConversations)
                {
                    conversationsData.Add(new ConversationData
                    {
                        Id = c.Id,
                        From = c.From,
                        To = c.To,
                        LastMessageDate = c.LastMessageDate,
                        Subject = c.Subject,
                        StartedDate = c.StartedDate,
                        messages = c.Messages.OrderByDescending(m => m.Date).ToList()

                    });
                }
                return conversationsData;
            }
        }

        [Route("summary")]
        public IDictionary<String, long> GetConversationsSummary()
        {
            var requestUser = ControllerUtils.GetUserFromRequest(Request);
            using (var ctx = new EmpoweringYouthContext())
            {
                var persistenUser = ctx.users.Find(requestUser.Id);
                var conversations = ctx.conversations.Include("To").Include("From").Include("Messages").Include("Messages.From").Include("Messages.To").
                    Where(conv => (conv.From.Id == requestUser.Id || conv.To.Id == requestUser.Id)).ToList();

                var result = new Dictionary<String, long>();

                List<Conversation> unreadConversations = new List<Conversation>();
                List<Conversation> readConversations = new List<Conversation>();

                foreach (Conversation c in conversations)
                {
                    foreach (Message m in c.Messages)
                    {
                        if (m.To.Id.Equals(requestUser.Id) && m.Status.Equals(Status.UNREAD))
                        {
                            unreadConversations.Add(c);
                            continue;
                        }
                    }

                    readConversations.Add(c);
                }

                result.Add("unread", unreadConversations.ToArray().Length);
                result.Add("read", readConversations.ToArray().Length);

                return result;
            }

        }

        [Route("dummy")]
        public long GetConversationsCount()
        {
            using (var ctx = new EmpoweringYouthContext())
            {
                return ctx.conversations.Count();
            }
        }
    }
}