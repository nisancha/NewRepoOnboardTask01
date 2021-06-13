using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace OnboardTask01
{
    public partial class Sale
    {
        public int Id { get; set; }
        public string Customer { get; set; }
        public string Product { get; set; }
        public string Store { get; set; }
    }
}
