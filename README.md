customerController////////////////////

// GET: api/Customer/5
[ResponseType(typeof(Customer))]
public IHttpActionResult GetCustomer(int id)
{
    Customer customer = db.Customers.Find(id);
    if (customer == null)
    {
        return NotFound();
    }

    return Ok(customer);
}

// PUT: api/Customer/5
[ResponseType(typeof(void))]
public IHttpActionResult PutCustomer(int id, Customer customer)
{
    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);
    }

    if (id != customer.CustomerID)
    {
        return BadRequest();
    }

    db.Entry(customer).State = EntityState.Modified;

    try
    {
        db.SaveChanges();
    }
    catch (DbUpdateConcurrencyException)
    {
        if (!CustomerExists(id))
        {
            return NotFound();
        }
        else
        {
            throw;
        }
    }

    return StatusCode(HttpStatusCode.NoContent);
}

// POST: api/Customer
[ResponseType(typeof(Customer))]
public IHttpActionResult PostCustomer(Customer customer)
{
    if (!ModelState.IsValid)
    {
        return BadRequest(ModelState);
    }

    db.Customers.Add(customer);
    db.SaveChanges();

    return CreatedAtRoute("DefaultApi", new { id = customer.CustomerID }, customer);
}

// DELETE: api/Customer/5
[ResponseType(typeof(Customer))]
public IHttpActionResult DeleteCustomer(int id)
{
    Customer customer = db.Customers.Find(id);
    if (customer == null)
    {
        return NotFound();
    }

    db.Customers.Remove(customer);
    db.SaveChanges();

    return Ok(customer);
}



itemController///////////////////////////////////

// GET: api/Item/5
        [ResponseType(typeof(Item))]
        public IHttpActionResult GetItem(int id)
        {
            Item item = db.Items.Find(id);
            if (item == null)
            {
                return NotFound();
            }

            return Ok(item);
        }

        // PUT: api/Item/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutItem(int id, Item item)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != item.ItemID)
            {
                return BadRequest();
            }

            db.Entry(item).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Item
        [ResponseType(typeof(Item))]
        public IHttpActionResult PostItem(Item item)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Items.Add(item);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = item.ItemID }, item);
        }

        // DELETE: api/Item/5
        [ResponseType(typeof(Item))]
        public IHttpActionResult DeleteItem(int id)
        {
            Item item = db.Items.Find(id);
            if (item == null)
            {
                return NotFound();
            }

            db.Items.Remove(item);
            db.SaveChanges();

            return Ok(item);
        }
		
	