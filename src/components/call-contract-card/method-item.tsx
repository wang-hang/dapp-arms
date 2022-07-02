import { useState } from 'react';
import { Card, Input, Button, Space, message, Form } from 'antd';

interface Props {
  onSubmit: (methodName: string, values: any) => Promise<any>;
  params: string[];
  name: string;
}

export default function MethodItem(props: Props) {
  const { onSubmit, params, name } = props;
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(values: any) {
    setLoading(true);
    try {
      const res = await onSubmit(name, values);
      // console.log('返回结果：', res);
      if (res) {
        setValue(res.toString());
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <div style={{ marginBottom: '20px' }}>
      <Form onFinish={handleSubmit} layout="inline">
        <Button
          type="primary"
          htmlType="submit"
          loading={loading}
          style={{ marginRight: '10px' }}
        >
          {name}
        </Button>
        {params.map((p, index) => (
          <Form.Item
            key={`${name}-${p}-${index}`}
            name={index}
            required
            rules={[{ required: true, message: `请输入参数` }]}
          >
            <Input placeholder={p}></Input>
          </Form.Item>
        ))}
      </Form>
      {value && (
        <div>
          <span>结果：</span>
          <span>{value}</span>
        </div>
      )}
    </div>
  );
}
