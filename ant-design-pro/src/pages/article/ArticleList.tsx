import { useAccess, useHistory, useIntl } from 'umi';
import React, { useRef } from 'react';

import { PageContainer, ProTable, TableDropdown } from '@ant-design/pro-components';
import { Button, Dropdown, Menu } from 'antd';
import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons';

import type { ActionType, ProColumns } from '@ant-design/pro-components';

import './style.less';
import { fetchCnode } from '@/services/ant-design-pro/article';

// 定义表格的列
const columns: ProColumns<API.ArtilceItem>[] = [
  // 第一列
  {
    dataIndex: 'index',
    valueType: 'indexBorder',
    width: 48,
  },
  {
    hideInSearch: true,
    title: '作者',
    align: 'center',
    dataIndex: 'avatar_url',
    render: (_, row) => (
      <div className="avatar">
        <img src={row.author.avatar_url} title={row.author.loginname} />
      </div>
    ),
  },
  {
    hideInSearch: true,
    title: '访问量',
    dataIndex: 'visit_count',
    align: 'center',
    render: (_, row) => (
      <div>
        {row.reply_count} / {row.visit_count}
      </div>
    ),
  },
  {
    title: '类别',
    dataIndex: 'tab',
    align: 'center',
    valueType: 'select',
    filters: true,
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      good: {
        text: '精华',
        status: 'Default',
      },
      share: {
        text: '分享',
        status: 'Default',
      },
      ask: {
        text: '问答',
        status: 'Default',
      },
      job: {
        text: '招聘',
        status: 'Default',
      },
    },
  },
  {
    title: '标题',
    order: 9999,
    dataIndex: 'title',
    align: 'center',
    copyable: true,
    ellipsis: true,
    tip: '标题过长会自动收缩',
  },
  {
    hideInSearch: true,
    title: '评论时间',
    dataIndex: 'last_reply_at',
    align: 'center',
    render: (_, row) => {
      return <div>{Date.parse(row.last_reply_at)}</div>;
    },
  },
  {
    title: '操作',
    align: 'center',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
      <TableDropdown
        key="actionGroup"
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' },
        ]}
      />,
    ],
  },
];

const menu = (
  <Menu>
    <Menu.Item key="1">1st item</Menu.Item>
    <Menu.Item key="2">2nd item</Menu.Item>
    <Menu.Item key="3">3rd item</Menu.Item>
  </Menu>
);

const ArticleList: React.FC = () => {
  const access = useAccess();
  console.log('元素权限access', access);
  const actionRef = useRef<ActionType>();
  const histroy = useHistory();

  return (
    <PageContainer title="文章列表页">
      <ProTable<API.ArtilceItem>
        columns={columns}
        actionRef={actionRef}
        cardBordered
        request={async (params, sort, filter) => {
          console.log('--- request', params, sort, filter);
          return fetchCnode({ page: params.current, limit: params.pageSize, tab: params.tab });
        }}
        editable={{
          type: 'multiple',
        }}
        columnsState={{
          persistenceKey: 'pro-table-singe-demos',
          persistenceType: 'localStorage',
          onChange(value) {
            console.log('value: ', value);
          },
        }}
        rowKey="id"
        search={{
          labelWidth: 'auto',
        }}
        form={{
          // 由于配置了 transform，提交的参与与定义的不同这里需要转化一下
          syncToUrl: (values, type) => {
            if (type === 'get') {
              return {
                ...values,
                created_at: [values.startTime, values.endTime],
              };
            }
            return values;
          },
        }}
        pagination={{
          pageSize: 10,
          onChange: (page) => console.log(page),
          total: 50,
          showSizeChanger: true,
          pageSizeOptions: [2, 5, 10, 20],
        }}
        dateFormatter="string"
        headerTitle="高级表格"
        toolBarRender={() => [
          <Button
            onClick={() => histroy.push('/article/add')}
            key="button"
            icon={<PlusOutlined />}
            type="primary"
          >
            新建
          </Button>,
          <Dropdown key="menu" overlay={menu}>
            <Button>
              <EllipsisOutlined />
            </Button>
          </Dropdown>,
        ]}
      />
    </PageContainer>
  );
};

export default ArticleList;
