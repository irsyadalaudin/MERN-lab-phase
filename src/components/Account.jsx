import { useState } from 'react'

const Account = () => {
    const [selectedTab, setSelectedTab] = useState('personal-information')

    const changeTab = (tabName) => {
        return () => {
            setSelectedTab(tabName)
        }
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
                        <button onClick={changeTab('personal-information')} className='bg-transparent h-24'>Personal Information</button>
                        <button onClick={changeTab('recipe-history')} className='bg-transparent h-24'>Recipe History</button>
                        <button onClick={changeTab('favorite-food')} className='bg-transparent h-24'>Favorite Food</button>
                        <button onClick={changeTab('account-setting')} className='bg-transparent h-24'>Account Setting</button>
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