﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
   public partial class InitialCreate : Migration
   {
      protected override void Up(MigrationBuilder migrationBuilder)
      {
         migrationBuilder.CreateTable(
             name: "Users",
             columns: table => new
             {
                Id = table.Column<Guid>(nullable: false),
                Username = table.Column<string>(nullable: false),
                Email = table.Column<string>(nullable: false),
                Name = table.Column<string>(nullable: true),
                Password = table.Column<string>(nullable: false)
             },
             constraints: table =>
             {
                table.PrimaryKey("PK_Users", x => x.Id);
             });
      }

      protected override void Down(MigrationBuilder migrationBuilder)
      {
         migrationBuilder.DropTable(
             name: "Users");
      }
   }
}
