import { useState } from 'react'

const Account = () => {
    const [selectedTab, setSelectedTab] = useState('personal-information')
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    const [name, setName] = useState('Joko')
    const [userName, setUserName] = useState('joko0123')
    const [email, setEmail] = useState('jokomiyaw@gmail.com')

    const moveTab = (tabName) => {
        return () => {
            setSelectedTab(tabName)
        }
    }

    // const handleEdit = () => {
    //     setIsEditing((prev) => !prev)
    // }

    const handleEdit = (id) => {
        setIsEditing(true)
        setEditId(id)
    }

    const handleEditName = () => {
        handleEdit('name')
    }

    const handleEditUserName = () => {
        handleEdit('userName')
    }

    const handleEditEmail = () => {
        handleEdit('email')
    }

    const editName = (e) => {
        setName(e.target.value)
    }

    const editUserName = (e) => {
        setUserName(e.target.value)
    }

    const editEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSave = () => {
        setIsEditing(false)
        setEditId(null)
    }
    
    return (
        <div className='bg-yellow-600 h-90 px-28'>
            <div className='text-center pt-8'>
                <h1 className='pb-4 text-4xl'>Account</h1>
                <p className='text-2xl'>Manage your personal information, including phone numbers and email address where you can be contacted</p>
            </div>
            <div className='flex gap-14'>
                <div className='w-1/3 mt-5'>
                    <div className='flex flex-col'>
                        <button onClick={moveTab('personal-information')} className='bg-transparent h-24'>Personal Information</button>
                        <button onClick={moveTab('recipe-history')} className='bg-transparent h-24'>Recipe History</button>
                        <button onClick={moveTab('favorite-food')} className='bg-transparent h-24'>Favorite Food</button>
                        <button onClick={moveTab('account-setting')} className='bg-transparent h-24'>Account Setting</button>
                    </div>
                </div>
                <div className='w-2/3 mt-5'>
                    {selectedTab === 'personal-information' && (
                        <div>
                            <form action='#'>
                                <div>
                                    <label className='block' htmlFor='name'>Name:</label>
                                    <input onChange={editName} type='text' value={name} disabled={!isEditing || (editId && editId !== 'name') } autoComplete='off'/>
                                    {/* <button onClick={() => handleEdit ('name')}>✎</button> */}
                                    <button onClick={handleEditName}>✎</button>
                                    <button onClick={handleSave}>save</button>
                                </div>
                                <div>
                                    <label className='block' htmlFor='userName'>Username:</label>
                                    <input onChange={editUserName} type='text' value={userName} disabled={!isEditing || (editId && editId !== 'userName') } autoComplete='off'/>
                                    <button onClick={handleEditUserName}>✎</button>
                                    <button onClick={handleSave}>save</button>
                                </div>
                                <div>
                                    <label className='block' htmlFor='email'>Email:</label>
                                    <input onChange={editEmail} type='text' value={email} disabled={!isEditing || (editId && editId !== 'email') } autoComplete='off'/>
                                    <button onClick={handleEditEmail}>✎</button>
                                    <button onClick={handleSave}>save</button>
                                </div>
                            </form>
                            
                        </div>
                    )}
                    {selectedTab === 'recipe-history' && (
                        <div>
                            content for recipe history
                        </div>
                    )}
                    {selectedTab === 'favorite-food' && (
                        <div>
                            content for favorite food
                        </div>
                    )}
                    {selectedTab === 'account-setting' && (
                        <div>
                            content for account setting
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Account