﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace FancyRealEstate.Models
{
    public class PropertyType
    {
        public PropertyType()
        {
            this.RealEstatePropertys = new List<RealEstateProperty>();
        }
      
        public int Id { get; set;}

        [Required]
        public string Name { get; set; }

        public virtual ICollection<RealEstateProperty> RealEstatePropertys { get; set; }
    }
}