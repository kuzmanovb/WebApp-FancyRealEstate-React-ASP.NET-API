﻿namespace FancyRealEstate.DTOs
{
    public class SortedRealestatePropertiesDto
    {
        public int Page { get; set; }

        public bool IsDeleted { get; set; }

        public bool IsPromotion { get; set; }

        public string Deal { get; set; }

        public string City { get; set; }

        public string Destrict { get; set; }

        public double MinPrice { get; set; }

        public double MaxPrice { get; set; }

        public bool SortByMinPrice { get; set; }

        public bool SortByMaxPrice { get; set; }

    }
}