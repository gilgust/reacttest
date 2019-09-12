using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ReactApp.Models;

namespace ReactApp.Repositories
{
    public class SeminarMemoryRepository : ISeminarRepository
    {
        private List<Seminar> items;
        public IEnumerable<Seminar> Seminars => items ;
        public SeminarMemoryRepository()
        {
            items = new List<Seminar>{
                new Seminar { SeminarId = 1, Name = "seminar --1--", Description = "some description 1"},
                new Seminar { SeminarId = 2, Name = "seminar --2--", Description = "some description 2" },
                new Seminar { SeminarId = 3, Name = "seminar --3--", Description = "some description 3" },
                new Seminar { SeminarId = 4, Name = "seminar --4--", Description = "some description 4" }
            };
        }

        public Seminar GetSeminar(int id) => Seminars.FirstOrDefault(s => s.SeminarId == id);

        public Seminar AddSeminar(Seminar seminar)
        {
            if (seminar.SeminarId == 0 )
            {
                int index = Seminars.Count();
                while (Seminars.FirstOrDefault(s => seminar.SeminarId == index) != null) index++;
                seminar.SeminarId = index;
            }
            items.Add(seminar);
            return seminar;
        }

        public bool DeleteSeminar(int id) {
            var seminar = Seminars.FirstOrDefault(s => s.SeminarId == id);
            if (seminar != null)
            {
                return items.Remove(seminar);
            }
            return false;
        }

        public Seminar UpdateSeminar(Seminar seminar) => AddSeminar(seminar);
    }
}
