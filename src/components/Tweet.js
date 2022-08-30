import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";




function Tweet({tweet}) {

    return (
    
    <div className="tweet">
      <ProfileImage profileimage={tweet.user.image}/>

      <div className="body">
        <div className="top">
          <span className="user">
          <User name={tweet.user.name} handle={tweet.user.handle}/>
          </span>
          <Timestamp timestamp={tweet.timestamp}/>
          
        </div>
        <Message message={tweet.message} />
        
        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
