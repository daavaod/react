import { useHistory } from 'react-router-dom'

import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetupPage = () => {

    const history = useHistory();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://react-simple-app-9abba-default-rtdb.firebaseio.com/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/')
        });
    }

    return (
        <section>
            <h2>New Meetup Page</h2>
            <NewMeetupForm 
                onAddMeetup={addMeetupHandler}
            />
        </section>
    );
}
 
export default NewMeetupPage;