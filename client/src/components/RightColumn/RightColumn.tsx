import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Button from '../Button/Button';
import Column from '../Column/Column'
import Input from '../Input/Input';
import { v4 as uuidv4 } from 'uuid';
import { addNewHobby, deleteUserHobby } from '../../store/actions/users.actions';

const RightColumn = () => {

    const hobbies = useSelector((state: RootState) => state.userHobbies.hobbies);
    const dispatch = useDispatch();
    const slectedUserId = useSelector((state: RootState) => state.usersList.selectedUserId)


    type formStateType = {
        newHobbyPassion: string,
        newHobbyName: string,
        newHobbyDate: string,
    }

    const [formState, setNewFormState] = useState<formStateType>({
        newHobbyPassion: '',
        newHobbyName: '',
        newHobbyDate: ''
    });
    const { newHobbyPassion, newHobbyName, newHobbyDate } = formState;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setNewFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    const handleRowDelete = (userId: string, id:string): void => {
        console.log(userId);
        console.log(id);
        dispatch(deleteUserHobby({userId, id}))
    }

    const addNewHobbyHandler = () => {
        if (!newHobbyPassion || !newHobbyName || !newHobbyDate) {
            alert("Please enter hobby , passion and Date");
            return;
        }
        const hobbyInfo = {
            "id": uuidv4(),
            "userId": slectedUserId,
            "name": newHobbyName,
            "passion": newHobbyPassion,
            "year": `Since ${newHobbyDate}`
        }
        dispatch(addNewHobby(hobbyInfo))
        setNewFormState({
            newHobbyPassion: '',
            newHobbyName: '',
            newHobbyDate: ''

        })

    }

    const getHobbyHeader = () => (
        <>
            <Input name="newHobbyPassion" type="text" placeholder="Enter Passion" value={newHobbyPassion} onChange={handleInputChange} />
            <Input name="newHobbyName" type="text" placeholder="Enter Hobby" value={newHobbyName} onChange={handleInputChange} />
            <Input name="newHobbyDate" type="text" placeholder="Enter Year" value={newHobbyDate} onChange={handleInputChange} />
            <Button onClick={addNewHobbyHandler}>Add</Button>
        </>
    );

    const getUserHobbyContent = (hobby: any) => {
        return <div className='home_right_row'>
            <span>{hobby.passion}</span>
            <span>{hobby.name}</span>
            <span>{hobby.year}</span>
            <Button onClick={() => handleRowDelete(hobby.userId, hobby.id)}>Delete</Button>
        </div>
    }

    return (
        <Column data={hobbies} header={getHobbyHeader()} row={getUserHobbyContent} />
    )
}

export default RightColumn