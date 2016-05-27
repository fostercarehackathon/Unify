using EmpoweringYouth.Context;
using EmpoweringYouth.Models;
using EmpoweringYouth.Models.Dto;
using EmpoweringYouth.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace EmpoweringYouth.Controllers
{
    [RoutePrefix("api/messages")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class MessagesController : ApiController
    {

        [HttpPost]
        public IHttpActionResult AddNewMessage(MessageData messageData)
        {

            User requestUser = ControllerUtils.GetUserFromRequest(Request);
            if (requestUser == null)
            {
                return BadRequest();
            }
            //if conversation id !=null add to conversation
            using (var ctx = new EmpoweringYouthContext())
            {

                var toUser = ctx.users.Where(u => u.Username == messageData.To).Single();
                var fromUser = ctx.users.Find(requestUser.Id);
                if (!messageData.ConversationId.HasValue)
                {
                    Conversation conversation = new Conversation();
                    conversation.StartedDate = DateTime.Now;
                    conversation.LastMessageDate = conversation.StartedDate = DateTime.Now;
                    conversation.Subject = messageData.Subject;
                    conversation.To = toUser;
                    conversation.From = fromUser;
                    ctx.conversations.Add(conversation);
                    ctx.SaveChanges();
                    Message m = buildMessage(conversation, messageData, toUser);
                    m.From = fromUser;
                    ctx.messages.Add(m);
                    conversation.Messages.Add(m);
                    ctx.SaveChanges();
                    IDictionary<String, String> result = new Dictionary<String, String>();
                    result.Add("conversationId", conversation.Id.ToString());
                    return Ok(result);
                }
                else
                {
                    Conversation existingConversation = ctx.conversations.Include("Messages").Where(conv => conv.Id == messageData.ConversationId).First();
                    
                    DateTime replyDate = messageData.ReplyType == ReplyType.DELAYED ? DateTime.Now.AddDays(messageData.ReplyIn) : DateTime.Now;

                    Message newMessage = buildMessage(existingConversation, messageData, toUser);

                    if (existingConversation.Messages.ElementAt(0).To.Id == toUser.Id)
                    {
                        existingConversation.Messages.ElementAt(0).Status = Status.READ;
                    }
                    existingConversation.ReplyType = messageData.ReplyType;
                    existingConversation.ReplyDate = replyDate;
                    existingConversation.LastMessageDate = DateTime.Now;
                    Message m = buildMessage(existingConversation, messageData, toUser);
                    m.From = fromUser;
                    ctx.messages.Add(m);
                    existingConversation.Messages.Add(m);
                    ctx.SaveChanges();
                    
                    return Ok();
                }
            }
        }

        private Message buildMessage(Conversation c, MessageData messageData, User receiver)
        {
            return new Message
            {
                Body = messageData.Body,
                Date = DateTime.Now,
                Status = Status.UNREAD,
                To = receiver
            };
        }


    }
}
