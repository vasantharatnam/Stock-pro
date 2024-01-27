import {React,useEffect,useState} from 'react'
import Layout from './Layout'
import {useNavigate} from 'react-router-dom';
import LiveChart from './LiveChart';

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
            <LiveChart symboli='IBM' />
        </Layout>
        </>

  )
}

export default Stockitem;
