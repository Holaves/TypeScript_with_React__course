import React from 'react';
import Card, { CardVariant } from './components/UI/Card';
import UserList from './components/UI/UserList';
import { IUser } from './types/types';

const App = () => {
    const users: IUser[] = [
        {id: 1, name: 'Timur', email: 'timyr.gggd@gmail.com', address: {city: 'Temruk', street: 'Engelsa', zipcode: '121'}},
        {id: 2, name: 'Darya', email: 'deanth@bk.com', address: {city: 'Temruk', street: 'Sovetskaya', zipcode: '121'}}
    ]
    return (
        <div>
            <Card onClick={(num) => console.log(num)} width='280px' height='300px' variant={CardVariant.primary}>
                <button>Button</button>
            </Card>
            <UserList users={users}/>
        </div>
    );
};

export default App;