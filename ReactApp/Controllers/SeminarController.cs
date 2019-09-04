using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using ReactApp.Models;
using ReactApp.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactApp.Controllers
{
    [Route("api/[controller]/[action]")]
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
        public StatusCodeResult Patch(int id, [FromBody] JsonPatchDocument patch)
        {
            Seminar seminar = Get(id);
            if (seminar != null)
            {
                patch.ApplyTo(seminar);
                return Ok();
            }
            return NotFound();
        }

        [HttpDelete("{id}")]
        public void Delete(int id) => repository.DeleteSeminar(id);
    }
}
