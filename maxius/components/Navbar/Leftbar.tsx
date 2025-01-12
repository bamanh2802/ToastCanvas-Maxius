'use client'
import { FC, useState, useEffect } from "react"
import { usePathname, useRouter } from 'next/navigation'

interface LeftbarProps {
    isOpen: boolean
    onClose: () => void
}

const MenuList = ['Home', 'Brochure', 'Proposal', 'Contact']
const Brochure = ['HJS 2224', 'TJS 2125G', 'HGS 4024', 'TJS 104S', 'TJS 212S+', 'HSS 2224']
const Proposal = [
    'IPFS Data Center Development & Operation Consulting',
    'IPFS Data Center Build Vision',
    'Technology Application'
]

const Leftbar: FC<LeftbarProps> = ({ isOpen, onClose }) => {
    const router = useRouter()
    const pathname = usePathname()
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [isTransitioning, setIsTransitioning] = useState(false)

    const isHomePage = pathname === '/' || pathname === '/#'
    const isContactPage = pathname === '/contact'

    useEffect(() => {
        if (!isOpen) {
            if (activeMenu && activeMenu !== 'Home' && activeMenu !== 'Contact') {
                setActiveMenu(null)
            }
        }
    }, [isOpen, activeMenu])

    const handleMenuClick = (menu: string) => {
        if (isTransitioning) return

        if (menu === 'Home') {
            router.push('/')
            return
        }
        if (menu === 'Contact') {
            router.push('/contact')
            return
        }

        if (activeMenu === menu) {
            setActiveMenu(null)
            return
        }

        if (activeMenu && (menu === 'Brochure' || menu === 'Proposal')) {
            setIsTransitioning(true)
            setActiveMenu(null)
            
            setTimeout(() => {
                setActiveMenu(menu)
                setIsTransitioning(false)
            }, 100)
        } else {
            setActiveMenu(menu)
        }
    }

    const getSublist = (menu: string) => {
        switch (menu) {
            case 'Brochure':
                return Brochure
            case 'Proposal':
                return Proposal
            default:
                return []
        }
    }

    const isMenuActive = (menu: string) => {
        if (menu === 'Home') return isHomePage
        if (menu === 'Contact') return isContactPage
        return activeMenu === menu
    }
    
    return (
        <div 
            className={`fixed right-0 top-0 bottom-0 bg-[#101c43] w-[532px] overflow-hidden transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <ul className="flex flex-col justify-between h-full pt-[150px] pl-[40px] pr-[50px] pb-[50px]">
                <div className="font-light">
                    {MenuList.map((item) => (
                        <li key={item} className="relative font-light">
                            <button
                                onClick={() => handleMenuClick(item)}
                                className={`pt-[25px] font-light text-4xl transition-colors duration-300
                                    ${isMenuActive(item) ? 'text-[#FF9B50]' : 'text-white hover:text-[#FF9B50]'}`}
                            >
                                {item}
                            </button>
                            
                            {(item === 'Brochure' || item === 'Proposal') && (
                                <ul 
                                    className={`mt-4 ml-2 space-y-3 transition-all duration-300 ${
                                        activeMenu === item ? 'max-h-96' : 'max-h-0 '
                                    } overflow-hidden`}
                                >
                                    {getSublist(item).map((subItem) => (
                                        <li 
                                            key={subItem}
                                            className="text-white/80 text-lg hover:text-[#FF9B50] transition-colors duration-300"
                                        >
                                            {subItem}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </div>
                <div className="border-t-1">
                    <p className="text-p font-light mr-[52px] pt-[50px] pb-[30px]">5F 12-30, Simin-daero 327beon-gil, Dongan-gu, Anyang-si, Gyeonggi-do, Republic of Korea
                        <br/>
                        Tel 02. 851. 2662 /Fax 02. 851. 2655
                    </p>
                    <p className="text-p font-light">View Map</p>
                    <br />
                    <p className="text-p font-light">Company.</p>
                    <p>
                        <a href="support@maxius.io" className="text-p font-light">support@maxius.io</a>
                    </p>
                    <br />
                    <p className="text-p font-light">Technical support</p>
                    <p>
                        <a href="support@maxius.io" className="text-p font-light">support@maxius.io</a>
                    </p>
                </div>
            </ul>
        </div>
    )
}

export default Leftbar