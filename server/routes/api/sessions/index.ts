import { Router, Request, Response, NextFunction} from 'express';
import speakers from '../../../data/speakers';
import sessions from '../../../data/sessions';

let data = [];
function populate() {
  data = new Array();
  sessions.forEach(s => {
    let speaker = speakers.find(p => p.id === s.speaker);
    data.push({ id: s.id, speaker, topic: s.topic, description: s.description, room: s.room, timeSlot: s.timeSlot});
  });
}

class Sessions {
  router: Router;

  constructor () {
    this.router = Router();
    populate();
    
    // middleware that is specific to this router
    // this.router.use((req, res, next) {
    //   console.log('my middleware');
    //   next();
    // });

    this.router.get("/sessions", this.getSessions);
    this.router.get("/sessions/:id", this.getSession);
    // post
    // put
    // delete
  }

  getSessions(req: Request, res: Response) {
    res.json( data );
  }

  getSession(req: Request, res: Response) {
    let id:string = req.params.id;
    let session = data.find(s => s.id === id);
    res.json({ ...session });
  }
}

export default new Sessions().router;