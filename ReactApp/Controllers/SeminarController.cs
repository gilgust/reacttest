using Microsoft.AspNetCore.Mvc;
using ReactApp.Models;
using ReactApp.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactApp.Controllers
{
    [Route("api/[controller]")]
    public class SeminarController : Controller
    {
        private ISeminarRepository repository;

        public SeminarController(ISeminarRepository repo) => repository = repo;

        [HttpGet]
        public IEnumerable<Seminar> Get() => repository.Seminars;

        [HttpGet("{id}")]
        public Seminar Get(int id) => repository.GetSeminar(id);

        [HttpPost]
        public Seminar Post([FromBody] Seminar seminar) => repository.AddSeminar(new Seminar
        {
            SeminarId = 0,
            Name = seminar.Name,
            Description = seminar.Description,
        });

        [HttpPut]
        public Seminar Put([FromBody] Seminar sem) => repository.UpdateSeminar(sem);

        [HttpPatch("{id}")]
        public StatusCodeResult Patch()
        {

            return Ok();
        }

    }
}
