import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewUser, getUserHobbies, requestUserData, setSelectedUserId } from '../../store/actions/users.actions';
import { RootState } from '../../store/store';
import Button from '../Button/Button';
import Column from '../Column/Column'
import Input from '../Input/Input';
import { v4 as uuidv4 } from 'uuid';

const LeftColumn = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.usersList.users)

    const [newUser, setNewUser] = useState<string>('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser(event.target.value);
    }

    useEffect(() => {
        dispatch(requestUserData());
    }, []);

    const onAddUserClick = () => {
        if(!newUser) return;
        const user = {
            name: newUser,
            id: uuidv4()
        }
        dispatch(addNewUser(user));
        setNewUser('')
    }

    const getUserHeader = () => (
        <>
            <Input name="newUser" type="text" placeholder="Add New User" value={newUser} onChange={handleInputChange} />
            <Button onClick={onAddUserClick}>Add</Button>
        </>
    );

    const getUserRowContent = (user: { name: string }) => <span>{user.name}</span>;

    const onRowClick = (id: string) => {
        dispatch(getUserHobbies(id));
        dispatch(setSelectedUserId(id));
    }


  return (
    <div className="home_left">
    <Column data={users} header={getUserHeader()} row={getUserRowContent} onRowClick={onRowClick} />
    </div>
  )
}

export default LeftColumn