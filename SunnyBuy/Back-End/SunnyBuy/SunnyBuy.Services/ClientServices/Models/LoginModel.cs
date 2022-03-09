﻿using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace SunnyBuy.Services.ClientServices.Models
{
    public class LoginModel
    {
        [ Required , NotNull]
        public string Email { get; set; }

        [Required, NotNull]
        public string Password { get; set; }
    }
}
