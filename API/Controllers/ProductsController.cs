using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController :ControllerBase
    {
        private readonly StoreContext _context;
        
        public ProductsController(StoreContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task <ActionResult<List<product>>> GetProducts(){
            return await _context.products.ToListAsync();
        }
        [HttpGet("{id}")]// api/products/3
        public async Task <ActionResult<product>> GetProduct(int id){
            return await _context.products.FindAsync(id);
        }
    }
}