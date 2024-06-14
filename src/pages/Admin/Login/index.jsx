import React from "react";
import {
  Col,
  Row,
  Typography,
  Divider,
  ConfigProvider,
  Form,
  Input,
  Checkbox,
  Button,
  Image,
} from "antd";
import "../../../css/Admin/Login/index.css";
import backgroundImage from "../../../assets/images/backgroundLogin.png";
import { login, getCookie } from "../../../apis/LoginAdmin/index.js";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const { Title, Paragraph, Text, Link } = Typography;

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["QLNT_Cookie"]);

  const onFinish = async (values) => {
    const staffLogin = {
      username: values.username,
      password: values.password,
    };
    try {
      const loginAdmin = await login(staffLogin);
      if (loginAdmin === 1) {
        console.log("Cookies after login:");
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="login-main-container">
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "Dosis",
            },
          }}
        >
          <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ width: "80%", maxWidth: "500px" }}>
                <Divider>
                  <Title level={2} style={{ margin: 0 }}>
                    Đăng nhập
                  </Title>
                </Divider>
                <Form
                  name="login-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                  layout="vertical"
                  size={"large"}
                >
                  <Form.Item
                    label={
                      <Title level={4} style={{ margin: 0 }}>
                        Tên đăng nhập
                      </Title>
                    }
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Tên đăng nhập không để trống!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label={
                      <Title level={4} style={{ margin: 0 }}>
                        Mật khẩu
                      </Title>
                    }
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Mật khẩu không để trống!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Đăng nhập
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <Button type="primary" htmlType="submit" onClick={getCookie}>
              Check
            </Button>
            <div>
              <Image
                width={770}
                height={775}
                preview={false}
                src={backgroundImage}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </ConfigProvider>
      </div>
    </>
  );
};
export default Login;
