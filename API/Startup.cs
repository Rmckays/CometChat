using API.SignalR;
using Application.Users;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence;

namespace API
{
   public class Startup
   {
      public Startup(IConfiguration configuration)
      {
         Configuration = configuration;
      }

      public IConfiguration Configuration { get; }

      // This method gets called by the runtime. Use this method to add services to the container.
      public void ConfigureServices(IServiceCollection services)
      {
//         services.AddEntityFrameworkNpgsql().AddDbContext<ChatAppContext>(opt => opt.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));
         services.AddEntityFrameworkSqlServer().AddDbContext<ChatAppContext>(opt =>
            opt.UseSqlServer(Configuration.GetConnectionString("MSConnection")));
         services.AddSpaStaticFiles(Configuration =>
         {
            Configuration.RootPath = "client/build";
         });
         services.AddMediatR(typeof(List.Handler).Assembly);
         services.AddSignalR(hubOptions =>
         {
            hubOptions.EnableDetailedErrors = true;
         });
         services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
      }

      // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
      public void Configure(IApplicationBuilder app, IHostingEnvironment env)
      {
         if (env.IsDevelopment())
         {
            app.UseDeveloperExceptionPage();
         }
         else
         {
            // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
            // app.UseHsts();
         }

         app.UseSignalR(routes => {routes.MapHub<ChatHub>("/hub/chat");});
         
         app.UseMvc();

         app.UseSpa(spa =>
         {
            spa.Options.SourcePath = "client";

            if (env.IsDevelopment())
            {
               spa.UseReactDevelopmentServer(npmScript: "start");
            }
         });
      }
   }
}
