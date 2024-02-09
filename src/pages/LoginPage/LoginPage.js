import logo from "../../assets/logo.svg"
import { Container } from "./styled"
import StyledForm from "../../components/StyledForm"
import StyledInput from "../../components/StyledInput"
import StyledButton from "../../components/StyledButton"
import StyledLink from "../../components/StyledLink"
import { useNavigate } from "react-router-dom"
import apiAuth from "../../services/apiAuth"
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/UserContext"
import { ThreeDots } from "react-loader-spinner"

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)
    const { setUser } = useContext(UserContext)
    const navigate = useNavigate()

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function handleLogin(e) {
        e.preventDefault()
        setIsLoading(true)

        apiAuth.login(form)
            .then(res => {
                const { id, name, image, token } = res.data
                setIsLoading(false)
                setUser({ id, name, image, token })
                // localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify({ id, name, image, token }))
                navigate("/hoje")
            })
            .catch(err => {
                setIsLoading(false)
                alert(err.response.data.message)
            })
    }

    return (
        <Container>
            <img src={logo} alt="Logotipo" />
            <StyledForm onSubmit={handleLogin}>
                <StyledInput
                    name="email"
                    placeholder="email"
                    type="email"
                    required
                    disabled={isLoading}
                    value={form.email}
                    onChange={handleForm}
                />
                <StyledInput
                    name="password"
                    placeholder="senha"
                    type="password"
                    required
                    disabled={isLoading}
                    value={form.password}
                    onChange={handleForm}
                />
                <StyledButton type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <ThreeDots width={50} height={50} color="#FFFFFF" />
                    ) : "Entrar"}
                </StyledButton>
            </StyledForm>

            <StyledLink to="/cadastro">
                Não tem uma conta? Cadastre-se!
            </StyledLink>
        </Container>
    )
}