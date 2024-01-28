import {React,useEffect,useState} from 'react'
import Layout from './Layout'
import {useNavigate} from 'react-router-dom';
import LiveChart from './LiveChart';
import Login from './Login';

const Stockitem = ({isLoged}) => {
  
    const [logStatus, setLogStatus] = useState(false);
    const [symbol, setsymbol] = useState([]);
    const history = useNavigate();
  
    useEffect(()=> {

        setLogStatus(isLoged);
        // console.log("Entered Chart",isLoged);
        if(!isLoged)
        {
            history('/login');
        }

    },[isLoged]);


    return (
        <>
        <Layout isLoged={isLoged}>
            {logStatus ? 
            (<>
                <LiveChart symboli='IBM' />
            </>) : 
            (<>
                <Login onLogin={setLogStatus} isLoged={isLoged} />
            </>)}
        </Layout>
        </>

  )
}

export default Stockitem;
