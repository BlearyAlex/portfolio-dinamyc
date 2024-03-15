import { Link } from 'react-router-dom';
import { Card } from '../components/ui';

function NotFound() {
    return (
        <div className='h-screen flex justify-center items-center flex-col text-white'>
            <Card>
                <h1 className='text-4xl font-bold my-2'>Page Not Found</h1>
                <h3 className='text-2xl'>404</h3>
                <Link to="/">Go back to Home</Link>
            </Card>
        </div>
    )
}

export default NotFound