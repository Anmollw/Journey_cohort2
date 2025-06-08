import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({
    message : "Hono is up!"
  })
});

app.post('/user',(c)=>{
  return c.text("User is up!")
});

export default app
