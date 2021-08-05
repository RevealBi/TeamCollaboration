using Microsoft.AspNetCore.Mvc;
using Reveal.Sdk;
using Reveal.Sdk.Samples.Web.UpMedia.Backend.Services;
using System.Linq;
using System.Threading.Tasks;

namespace Reveal.Server
{
    [Route("DashboardInfos")]
    public class DashboardInfosController : Controller
    {
        readonly IDashboardService _dashboardService;
        public DashboardInfosController(IDashboardService dashboardService)
        {
            _dashboardService = dashboardService;
        }

        [HttpGet]
        public async Task<DashboardInfo[]> GetDashboardInfos()
        {
            var tasks = _dashboardService.GetAvailableDashboards().Select(async kvp => await kvp.Value.GetInfoAsync(kvp.Key));

            return await Task.WhenAll(tasks);
        }

        [Route("{id}")]
        [HttpGet]
        public async Task<DashboardInfo> GetDashboardInfoById(string id)
        {
            var availableDashboards = _dashboardService.GetAvailableDashboards();
            return availableDashboards.ContainsKey(id) ? await availableDashboards[id].GetInfoAsync(id) : null;
        }
    }
}
