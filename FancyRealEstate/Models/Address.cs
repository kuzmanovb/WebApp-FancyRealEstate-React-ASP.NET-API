﻿namespace FancyRealEstate.Models
{
    public class Address
    {
        public int Id { get; set; }

        public string Street { get; set; }

        public string BuildingNumber { get; set; }

        public int? CountryId { get; set; }

        public virtual Country Country { get; set; }

        public int? CityId { get; set; }

        public virtual City City { get; set; }

        public int? DistrictId { get; set; }

        public virtual District District { get; set; }

        public virtual RealEstateProperty RealEstateProperties { get; set; }
    }
}
