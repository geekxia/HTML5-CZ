import {
  PageContainer,
  ProForm,
  ProFormCascader,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormMoney,
  ProFormSelect,
  ProFormText,
  ProFormTreeSelect,
} from '@ant-design/pro-components';

const ArticleForm: React.FC = () => {
  return (
    <PageContainer title="商品新增页">
      <ProForm<{
        name: string;
        company?: string;
        useMode?: string;
      }>
        onFinish={async (values) => {
          console.log(values);
        }}
        params={{ id: '100' }}
        formKey="base-form-use-demo"
        dateFormatter={(value, valueType) => {
          console.log('---->', value, valueType);
          return value.format('YYYY/MM/DD HH:mm:ss');
        }}
        request={async () => {
          return {
            name: '蚂蚁设计有限公司',
            useMode: 'chapter',
          };
        }}
        autoFocusFirstInput
      >
        <ProForm.Group>
          <ProFormText
            width="md"
            name="name"
            required
            addonBefore={<a>客户名称应该怎么获得？</a>}
            addonAfter={<a>点击查看更多</a>}
            label="签约客户名称"
            tooltip="最长为 24 位"
            placeholder="请输入名称"
            rules={[{ required: true, message: '这是必填项' }]}
          />
          <ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称" />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormDigit name="count" label="人数" width="lg" />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            name={['contract', 'name']}
            width="md"
            label="合同名称"
            placeholder="请输入名称"
          />
          <ProFormDateRangePicker
            width="md"
            name={['contract', 'createTime']}
            label="合同生效时间"
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            options={[
              {
                value: 'chapter',
                label: '盖章后生效',
              },
            ]}
            readonly
            width="xs"
            cacheForSwr
            name="useMode"
            label="合同约定生效方式"
          />
          <ProFormSelect
            width="xs"
            options={[
              {
                value: 'time',
                label: '履行完终止',
              },
            ]}
            name="unusedMode"
            label="合同约定失效方式"
          />
          <ProFormMoney
            width="md"
            name="money"
            label="合同约定金额"
            fieldProps={{
              numberPopoverRender: true,
            }}
          />
        </ProForm.Group>
        <ProFormText width="sm" name="id" label="主合同编号" />
        <ProFormText name="project" width="md" disabled label="项目名称" initialValue="xxxx项目" />
        <ProFormText width="xs" name="mangerName" disabled label="商务经理" initialValue="启途" />
        <ProFormCascader
          width="md"
          request={async () => [
            {
              value: 'zhejiang',
              label: '浙江',
              children: [
                {
                  value: 'hangzhou',
                  label: '杭州',
                  children: [
                    {
                      value: 'xihu',
                      label: '西湖',
                    },
                  ],
                },
              ],
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              children: [
                {
                  value: 'nanjing',
                  label: 'Nanjing',
                  children: [
                    {
                      value: 'zhonghuamen',
                      label: 'Zhong Hua Men',
                    },
                  ],
                },
              ],
            },
          ]}
          name="areaList"
          label="区域"
          initialValue={['zhejiang', 'hangzhou', 'xihu']}
        />
      </ProForm>
    </PageContainer>
  );
};

export default ArticleForm;
