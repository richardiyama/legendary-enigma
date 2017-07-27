using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CRUDWebApi.Models
{
    public class Employee
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "Name is required")]
        [StringLength(160)]
        public string Name { get; set; }
        public int Age { get; set; }
        public int Salary { get; set; }


    }
}