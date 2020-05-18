using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ReactTrainingAssignment2.Controllers
{
    [Route("api/[controller]")]
    public class ContactDataController : Controller
    {
        // GET: api/<controller>
        [HttpGet]
        [Route("contacts")]
        public IEnumerable<Contact> GetContacts()
        {
            Contact[] contacts = new Contact[]
            {
                    new Contact { id = 1, fullname = "gk", phone = "999554002", email = "gk@gmail.com"},
                    new Contact { id = 2, fullname = "sreeraj", phone = "999554003", email = "sreeraj@mail.com"},
                    new Contact { id = 3, fullname = "vishnu", phone = "999554005", email = "vishnu@gmail.com "},
                    new Contact { id = 4, fullname = "surya", phone = "999554000", email = "surya@gmail.com "},
                    new Contact { id = 5, fullname = "praphu", phone = "999554001", email = "praphu@gmail.in "},
            };
            return contacts;
        }

        public class Contact
        {
            public int id { get; set; }
            public string fullname { get; set; }
            public string phone { get; set; }
            public string email { get; set; }
        }
    }
}
