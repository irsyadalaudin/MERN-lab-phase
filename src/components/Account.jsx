import { useState } from 'react'

const Account = () => {
    const [selectedTab, setSelectedTab] = useState('personal-information')

    const handleChangeTab = (tab) => {
        setSelectedTab(tab)
    }

    return (
        <div className='bg-yellow-600 h-90 px-28'>
            <div className='text-center pt-8'>
                <h1 className='pb-4 text-4xl'>Account</h1>
                <p className='text-2xl'>Manage your personal information, including phone numbers and email address where you can be contacted</p>
            </div>
            <div className='flex'>
                <div className='w-1/3 mt-5'>
                    <div className='flex flex-col'>
                        <button onClick={() => handleChangeTab('personal-information')} className={selectedTab === 'personal-information' ? 'active-tab' : ''}>Personal Information</button>
                        <button onClick={() => handleChangeTab('recipe-history')} className={selectedTab === 'recipe-history' ? 'active-tab' : ''}>Recipe History</button>
                        <button onClick={() => handleChangeTab('favorite-food')} className={selectedTab === 'favorite-food' ? 'active-tab' : ''}>Favorite Food</button>
                        <button onClick={() => handleChangeTab('account-setting')} className={selectedTab === 'account-setting' ? 'active-tab' : ''}>Account Setting</button>
                    </div>
                </div>
                <div className='w-2/3 mt-5'>
                    {selectedTab === 'personal-information' && (
                        <div>
                            content for personal information
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