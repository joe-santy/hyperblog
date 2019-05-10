import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace com.hyperblog{
   export class Blogger extends Participant {
      firstName: string;
      lastName: string;
   }
   export class BlogPost extends Asset {
      title: string;
      date: string;
      writer: Blogger;
      content: string;
   }
// }
