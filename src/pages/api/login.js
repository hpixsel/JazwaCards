import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "@/lib/config"; 

export default withIronSessionApiRoute(loginRoute, ironOptions);

async function loginRoute(req, res) {
  const loginCredentials = JSON.parse(req.body)
  if (loginCredentials.username == "hpixsel") {
    req.session.user = {
      id: 1,
      username: "hpixsel",
      email: "hpixsel@o2.pl"
    };

    await req.session.save();
    res.send({ ok: true });
  }
  res.send({ok: false})
}