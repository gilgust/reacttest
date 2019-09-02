using ReactApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactApp.Repositories
{
    public interface ISeminarRepository
    {
        IEnumerable<Seminar> Seminars { get; }
        Seminar GetSeminar(int id);
        Seminar AddSeminar(Seminar seminar);
        Seminar UpdateSeminar(Seminar seminar);
        void DeleteSeminar(int id);
    }
}
