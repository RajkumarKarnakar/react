import { withEditableUser } from "./withEditableUser"

export const UserInfoForm = withEditableUser(({user,onChangeUser,onSaveUser,onResetUser})=>{
    const {name,age,hairColor,weight} = user ||{};

    return user ? (
    <>
    <label>
        Name:
        <input value={name} onChange={e=>onChangeUser({name: e.target.value})}/>
    </label>
    <label>
        Age:
        <input value={age} onChange={e=>onChangeUser({age: Number(e.target.value)})}/>
    </label>
    <label>
        Hair Color:
        <input value={hairColor} onChange={e=>onChangeUser({hairColor: e.target.value})}/>
    </label>
    <label>
        Weight:
        <input value={weight} onChange={e=>onChangeUser({weight: e.target.value})}/>
        kg <span>&nbsp;</span>
    </label>
    <button onClick={onResetUser}>Reset</button>
    <button onClick={onSaveUser}>Save Changes</button>
    </>
    ): <p>Loading...</p>
},'102')