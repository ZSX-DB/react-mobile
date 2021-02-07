import {useState, useEffect} from 'react'
import {Radio} from 'zarm'
import {searchLanguage} from "@/api/demo"

const HookDemo = () => {

    const [language, setLanguage] = useState('JavaScript')
    const [info, setInfo] = useState({})
    const languageList = [
        {
            lid: 1,
            searchLabel: 'JavaScript'
        },
        {
            lid: 2,
            searchLabel: 'Python'
        },
        {
            lid: 3,
            searchLabel: 'Golang'
        }
    ]
    const handleChange = val => {
        setLanguage(val)
    }
    useEffect(() => {
        searchLanguage({
            name: language
        }).then(resp => {
            setInfo(resp.data.data)
        })
    }, [language])

    return (
        <div className="top-margin page-padding text-center">
            <h1>Hook示例</h1>
            <h2>{info.title}</h2>
            <h3>{info.detail}</h3>
            <p>Select the programming language</p>
            <Radio.Group defaultValue="JavaScript" onChange={handleChange}>
                {languageList.map(item => (
                    <Radio key={item.lid} value={item.searchLabel}>
                        {item.searchLabel}
                    </Radio>
                ))}
            </Radio.Group>
        </div>
    )
}

export default HookDemo
