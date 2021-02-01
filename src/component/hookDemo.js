import {useState, useEffect} from 'react'
import service from '@/util/service'

const HookDemo = () => {

    const [language, setLanguage] = useState('js')
    const [info, setInfo] = useState({})
    const languageList = [
        {
            searchLabel: 'js',
            fullName: 'JavaScript'
        },
        {
            searchLabel: 'python',
            fullName: 'Python'
        },
        {
            searchLabel: 'go',
            fullName: 'Golang'
        },
        {
            searchLabel: 'java',
            fullName: 'Java'
        },
        {
            searchLabel: 'ruby',
            fullName: 'Ruby'
        },
        {
            searchLabel: 'php',
            fullName: 'PHP'
        }
    ]
    const initData = () => {
        service({
            url: '/nodes/show.json',
            method: 'get',
            params: {
                name: language
            }
        }).then(resp => {
            setInfo(resp.data)
        })
    }
    const handleChange = event => {
        setLanguage(event.target.value)
    }
    useEffect(() => {
        initData()
    }, [language])

    return (
        <div className="text-center">
            <h1>Hook示例</h1>
            <img src={info.avatar_large} alt="logo" className="language-logo"/>
            <h2>{info.title}</h2>
            <h4>{info.header}</h4>
            <span>Select the programming language</span><br/>
            <select value={language} onChange={handleChange}>
                {languageList.map(item => <option key={item.searchLabel} value={item.searchLabel}>
                    {item.fullName}
                </option>)}
            </select>
        </div>
    )
}

export default HookDemo
