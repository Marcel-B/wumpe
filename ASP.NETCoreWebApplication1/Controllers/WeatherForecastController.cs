using Microsoft.AspNetCore.Mvc;

namespace ASP.NETCoreWebApplication1.Controllers;

[ApiController]
[Route("[controller]")]
public class BuchungController : ControllerBase
{
    [HttpGet("neu/arten")]
    public IEnumerable<string> Buchungsarten()
    {
        return new[] { "Monat", "Jahr" };
    }
}