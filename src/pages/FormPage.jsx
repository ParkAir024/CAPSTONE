import Body from "../components/Body"

export default function FormPage({ children }) {
    return (
        <Body sidebar={false}>
            {children}
        </Body>
    )
}