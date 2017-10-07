import { Router, Request, Response, NextFunction} from 'express';
import speakers from '../../../data/speakers';
import sessions from '../../../data/sessions';

let data = [];
function populate() {
  speakers.forEach(s => {
    let session = sessions.find(session => session.speaker === s.id);
    data.push({ id: s.id, firstName: s.firstName, lastName: s.lastName, location: s.location, description: s.description, linkedin: s.linkedin, twitter: s.twitter, web: s.web, session, img: s.img });
  });  
}

class Speakers {
  router: Router;
  data;
  
  constructor () {
    this.router = Router();
    populate();

    // middleware that is specific to this router
    // this.router.use((req, res, next) {
    //   console.log('my middleware');
    //   next();
    // });

    this.router.get("/speakers", this.getSpeakers);
    this.router.get("/speakers/:id", this.getSpeaker);
    // post
    // put
    // delete
  }



  getSpeakers(req: Request, res: Response) {
    res.json( data );
  }

  getSpeaker(req: Request, res: Response) {
    let id:string = req.params.id;
    let speaker = data.find(s => s.id === id);
    res.json({ ...speaker });
  }
}

export default new Speakers().router;