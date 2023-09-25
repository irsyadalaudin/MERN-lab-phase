import { useEffect, useState } from 'react'

const Account = () => {
    const [selectedTab, setSelectedTab] = useState('personal-information')
    const [contentExceddHeight, setContentExceddHeight] = useState(false)
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    const [name, setName] = useState('Joko')
    const [userName, setUserName] = useState('joko0123')
    const [email, setEmail] = useState('jokomiyaw@gmail.com')
    const [favoriteFood, setFavoriteFood] = useState('')
    const [submitedFavoriteFood, setSubmitedFavoriteFood] = useState([])

    const moveTab = (tabName) => {
        return () => {
            setSelectedTab(tabName)
        }
    }


    /* PERSONAL INFORMATION FUNCTION */
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

    const handleSaveWithEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleSave()
        }
    }


    /* RECIPE HISTORY FUNCTION */
    useEffect(() => {
        const container = document.getElementById('container')
        const contentHeight = container.scrollHeight
        const containerHeight = container.clientHeight

        if (contentHeight > containerHeight) {
            setContentExceddHeight(true)
        } else {
            setContentExceddHeight(false)
        }
    }, [selectedTab])

    const containerStyle = `bg-yellow-600 px-28 ${contentExceddHeight ? 'h-full' : 'h-90'}`


    /* FAVORITE FOOD FUNCTION */
    const handleSubmit = (e) => {
        e.preventDefault()

            const newFavoriteFood = {
                id: Date.now(),
                favoriteFood: favoriteFood
                // Date.now(),
                // favoriteFood
            }
        // setSubmitedFavoriteFood([...submitedFavoriteFood, favoriteFood])
        setSubmitedFavoriteFood([...submitedFavoriteFood, newFavoriteFood])
        setFavoriteFood('')
        // console.log(favoriteFood)
        console.log(submitedFavoriteFood)
    }

    const handleFavoriteFood = (e) => {
        setFavoriteFood(e.target.value)
    }


    return (
        <div id='container' className={containerStyle}>
            <div className='text-center pt-8'>
                <h1 className='pb-4 text-4xl'>Account</h1>
                <p className='text-2xl'>Manage your personal information, including phone numbers and email address where you can be contacted</p>
            </div>
            <div className='flex flex-grow gap-14'>
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
                        <form action='#'>
                            <div>
                                <label className='block' htmlFor='name'>Name:</label>
                                <input onChange={editName} onKeyDown={handleSaveWithEnter} type='text' value={name} disabled={!isEditing || (editId && editId !== 'name') } autoComplete='off'/>
                                <button onClick={handleEditName}>✎</button>
                                <button onClick={handleSave}>save</button>
                            </div>
                            <div>
                                <label className='block' htmlFor='userName'>Username:</label>
                                <input onChange={editUserName} onKeyDown={handleSaveWithEnter} type='text' value={userName} disabled={!isEditing || (editId && editId !== 'userName') } autoComplete='off'/>
                                <button onClick={handleEditUserName}>✎</button>
                                <button onClick={handleSave}>save</button>
                            </div>
                            <div>
                                <label className='block' htmlFor='email'>Email:</label>
                                <input onChange={editEmail} onKeyDown={handleSaveWithEnter} type='text' value={email} disabled={!isEditing || (editId && editId !== 'email') } autoComplete='off'/>
                                <button onClick={handleEditEmail}>✎</button>
                                <button onClick={handleSave}>save</button>
                            </div>
                        </form>
                    )}

                    {selectedTab === 'recipe-history' && (
                        <div>
                            <h1>ayam bakar taliwang</h1>
                            <h3>ingredients</h3>
                            <ul>
                                <li>1 ekor ayam, potong menjadi 4 bagian</li>
                                <li>10 buah cabai rawit (sesuai selera pedas)</li>
                                <li>5 buah cabai merah besar</li>
                                <li>5 buah bawang merah</li>
                                <li>3 siung bawang putih</li>
                                <li>2 cm kencur</li>
                                <li>1 cm jahe</li>
                                <li>2 batang serai, memarkan</li>
                                <li>3 lembar daun salam</li>
                                <li>3 lembar daun jeruk</li>
                                <li>2 sendok makan kecap manis</li>
                                <li>1 sendok makan gula pasir</li>
                                <li>Garam secukupnya</li>
                                <li>Merica secukupnya</li>
                                <li>Minyak untuk menggoreng dan menumis</li>
                            </ul>
                            <h3>cooking instructions</h3>
                            <ol>
                                <li>Siapkan bumbu halus:</li>
                                <ul>
                                    <li>Haluskan cabai rawit, cabai merah besar, bawang merah, bawang putih, kencur, dan jahe.</li>
                                </ul>
                                <li>Marinasi Ayam:</li>
                                <ul>
                                    <li>Campurkan ayam dengan bumbu halus, kecap manis, gula pasir, garam, dan merica. Diamkan minimal 1-2 jam agar bumbu meresap.</li>
                                </ul>
                                <li>Panggang Ayam:</li>
                                <ul>
                                    <li>Panaskan grill atau panggangan. Olesi ayam dengan sedikit minyak.</li>
                                    <li>Panggang ayam di atas bara api hingga matang dan berwarna kecokelatan.</li>
                                </ul>
                                <li>Sajikan:</li>
                                <ul>
                                    <li>Sajikan ayam bakar Taliwang bersama nasi putih hangat, irisan timun, dan lalapan daun kemangi. Tambahkan sambal untuk lebih pedas jika diinginkan.</li>
                                </ul>
                            </ol>
                        </div>
                    )}

                    {selectedTab === 'favorite-food' && (
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label className='block' htmlFor='favoriteFood'>Favorite Food:</label>
                                <input className='block' type='text' value={favoriteFood} onChange={handleFavoriteFood} />
                                <button type='submit'>submit</button>
                            </form>
                            <ol>
                                {/* {submitedFavoriteFood.map((food, index) => {
                                    return <li key={index}>{food}</li>
                                })} */}
                                {submitedFavoriteFood.map((food) => {
                                    return <li key={food.id}>{food.favoriteFood}</li>
                                })}
                            </ol>
                        </div>
                    )}

                    {selectedTab === 'account-setting' && (
                        <form>
                            content for account setting
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Account