import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import classNames from "classnames"
import LeftColumn from "../../components/LeftColumn/LeftColumn"
import RightColumn from "../../components/RightColumn/RightColumn"

const Home = () => {
    const slectedUserId = useSelector((state: RootState) => state.usersList.selectedUserId)

    return (
        <div className="home">
            <div className="home_left">
                <LeftColumn />
            </div>
            <div className={classNames('home_right', { 'home_disabled': !slectedUserId })}>
                {
                    !slectedUserId ?
                        <div>
                            <h1>User Hobbies</h1>
                            <p>Please select a user</p>
                        </div> :
                        <RightColumn />
                }


            </div>
        </div>
    )
}

export default Home