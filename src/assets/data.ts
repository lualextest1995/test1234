export default {
  UserMenu: [
    {
      FuncName: '指標儀表板',
      FuncId: 'ID',
      subFuns: [
        { FuncName: '中心儀表板', FuncId: 'ID01', subFuns: null },
        { FuncName: '計核課儀表板', FuncId: 'ID02', subFuns: null },
        { FuncName: '設備課儀表板', FuncId: 'ID03', subFuns: null },
        { FuncName: '系統軟體專案小組儀表板', FuncId: 'ID04', subFuns: null }
      ]
    },
    {
      FuncName: '交通運量指標',
      FuncId: 'TV',
      subFuns: [
        {
          FuncName: '交易查詢',
          FuncId: 'TV01',
          subFuns: [
            {
              FuncName: '票卡交易查詢(最新50筆)',
              FuncId: 'TV0101',
              subFuns: null
            },
            {
              FuncName: '進階交易查詢',
              FuncId: 'TV0102',
              subFuns: null
            },
            {
              FuncName: '交易證明申請',
              FuncId: 'TV0103',
              subFuns: null
            },
            {
              FuncName: '優待票交易查詢',
              FuncId: 'TV0104',
              subFuns: null
            },
            {
              FuncName: '定期票交易查詢',
              FuncId: 'TV0105',
              subFuns: null
            },
            {
              FuncName: '團體票交易查詢',
              FuncId: 'TV0106',
              subFuns: null
            },
            {
              FuncName: '出入證使用紀錄查詢',
              FuncId: 'TV0107',
              subFuns: null
            },
            {
              FuncName: 'CSC加值異常紀錄查詢',
              FuncId: 'TV0108',
              subFuns: null
            },
            {
              FuncName: '發票紀錄查詢',
              FuncId: 'TV0109',
              subFuns: null
            },
            {
              FuncName: '10年內未使用Token清單',
              FuncId: 'TV0110',
              subFuns: null
            }
          ]
        },
        {
          FuncName: '系統資訊查詢',
          FuncId: 'TV02',
          subFuns: [
            {
              FuncName: '單程票失效比率',
              FuncId: 'TV0201',
              subFuns: null
            },
            {
              FuncName: '設備交易數統計',
              FuncId: 'TV0202',
              subFuns: null
            },
            {
              FuncName: '桃捷黑/灰/白名單查詢',
              FuncId: 'TV0203',
              subFuns: null
            },
            {
              FuncName: '交通部票證資料(行控版)',
              FuncId: 'TV0204',
              subFuns: null
            },
            {
              FuncName: '回數票資料',
              FuncId: 'TV0205',
              subFuns: null
            },
            {
              FuncName: '定期票資料',
              FuncId: 'TV0206',
              subFuns: null
            },
            {
              FuncName: '旅客服務APP資料',
              FuncId: 'TV0207',
              subFuns: null
            },
            {
              FuncName: '定期票/電子票證資料(交通部)',
              FuncId: 'TV0208',
              subFuns: null
            },
            {
              FuncName: '交通部票證資料上傳',
              FuncId: 'TV0209',
              subFuns: null
            },
            {
              FuncName: '電子票證交易資料',
              FuncId: 'TV0210',
              subFuns: null
            },
            {
              FuncName: '外部串接資料查詢',
              FuncId: 'TV0211',
              subFuns: null
            }
          ]
        },
        {
          FuncName: '運量分析',
          FuncId: 'TV03',
          subFuns: [
            {
              FuncName: '即時運量表',
              FuncId: 'TV0301',
              subFuns: null
            },
            {
              FuncName: '分時運量表',
              FuncId: 'TV0302',
              subFuns: null
            },
            {
              FuncName: '運量日報表',
              FuncId: 'TV0303',
              subFuns: null
            },
            {
              FuncName: '各站進出站運量表',
              FuncId: 'TV0304',
              subFuns: null
            },
            {
              FuncName: '分時OD表(依進站)',
              FuncId: 'TV0305',
              subFuns: null
            },
            {
              FuncName: '即時/分時OD表(依出站)',
              FuncId: 'TV0306',
              subFuns: null
            },
            {
              FuncName: '每日OD總表',
              FuncId: 'TV0307',
              subFuns: null
            },
            {
              FuncName: '運量月報表(依日)',
              FuncId: 'TV0308',
              subFuns: null
            },
            {
              FuncName: '運量月報表(依車站)',
              FuncId: 'TV0309',
              subFuns: null
            },
            {
              FuncName: '運量月報表(依票種)',
              FuncId: 'TV0310',
              subFuns: null
            },
            {
              FuncName: '營運資料表(運量)',
              FuncId: 'TV0311',
              subFuns: null
            },
            {
              FuncName: '營運量值表',
              FuncId: 'TV0312',
              subFuns: null
            },
            {
              FuncName: '活動貢獻度比較',
              FuncId: 'TV0313',
              subFuns: null
            },
            {
              FuncName: '各站進出人流分析',
              FuncId: 'TV0314',
              subFuns: null
            },
            {
              FuncName: '運量比較分析',
              FuncId: 'TV0315',
              subFuns: null
            }
          ]
        },
        {
          FuncName: '銷售分析',
          FuncId: 'TV04',
          subFuns: [
            {
              FuncName: '團體票銷售日報表',
              FuncId: 'TV0401',
              subFuns: null
            },
            {
              FuncName: '定期票銷售日報表',
              FuncId: 'TV0402',
              subFuns: null
            },
            {
              FuncName: '回數票銷售日報表',
              FuncId: 'TV0403',
              subFuns: null
            },
            {
              FuncName: '清分日月報(行動支付)',
              FuncId: 'TV0404',
              subFuns: null
            }
          ]
        },
        {
          FuncName: '營運日報表',
          FuncId: 'TV05',
          subFuns: [
            {
              FuncName: '票箱收入',
              FuncId: 'TV0501',
              subFuns: null
            },
            {
              FuncName: '桃捷票卡轉營收',
              FuncId: 'TV0502',
              subFuns: null
            },
            {
              FuncName: '銷帳檔查詢',
              FuncId: 'TV0503',
              subFuns: null
            },
            {
              FuncName: '營運資料表(營收)',
              FuncId: 'TV0504',
              subFuns: null
            },
            {
              FuncName: '票證規則查核',
              FuncId: 'TV0505',
              subFuns: null
            }
          ]
        },
        {
          FuncName: '營運月報表',
          FuncId: 'TV06',
          subFuns: [
            {
              FuncName: '系統營收統計',
              FuncId: 'TV0601',
              subFuns: null
            },
            {
              FuncName: '營運數據統計',
              FuncId: 'TV0602',
              subFuns: null
            },
            {
              FuncName: '未逾期定期票資訊月報表',
              FuncId: 'TV0603',
              subFuns: null
            },
            {
              FuncName: '綜合數據彙整表(北捷)',
              FuncId: 'TV0604',
              subFuns: null
            },
            {
              FuncName: '優待票月報表',
              FuncId: 'TV0605',
              subFuns: null
            },
            {
              FuncName: '營運月資料',
              FuncId: 'TV0606',
              subFuns: null
            },
            {
              FuncName: '營收及平均票價統計',
              FuncId: 'TV0607',
              subFuns: null
            },
            {
              FuncName: '應收/付款項估計入帳明細表',
              FuncId: 'TV0608',
              subFuns: null
            },
            {
              FuncName: '每月北捷、桃捷轉乘統計',
              FuncId: 'TV0609',
              subFuns: null
            }
          ]
        }
      ]
    },
    {
      FuncName: '工單績效指標',
      FuncId: 'WO',
      subFuns: [
        {
          FuncName: '維護績效分析',
          FuncId: 'WO01',
          subFuns: [
            { FuncName: '故障檢修工單達成率', FuncId: 'WO0101', subFuns: null },
            { FuncName: '預檢工單如期完修率', FuncId: 'WO0102', subFuns: null },
            { FuncName: '多元支付服務妥善率', FuncId: 'WO0103', subFuns: null },
            { FuncName: '設備平均維修成本', FuncId: 'WO0104', subFuns: null }
          ]
        },
        {
          FuncName: '設備可用度分析',
          FuncId: 'WO02',
          subFuns: [
            { FuncName: '場站設施(自動售票機)維修數據', FuncId: 'WO0201', subFuns: null },
            { FuncName: '場站設施(自動收費閘門)維修數據', FuncId: 'WO0202', subFuns: null },
            { FuncName: '設備平均可用度報表', FuncId: 'WO0203', subFuns: null }
          ]
        },
        {
          FuncName: '設備故障統計',
          FuncId: 'WO03',
          subFuns: [
            { FuncName: '設備故障件數統計', FuncId: 'WO0301', subFuns: null },
            { FuncName: '設備故障態樣統計', FuncId: 'WO0302', subFuns: null },
            { FuncName: '設備故障態樣追蹤查詢', FuncId: 'WO0303', subFuns: null }
          ]
        },
        {
          FuncName: '設備維護履歷管理',
          FuncId: 'WO04',
          subFuns: [
            { FuncName: '工單資訊查詢', FuncId: 'WO0401', subFuns: null },
            { FuncName: '維修工單狀態管控', FuncId: 'WO0402', subFuns: null },
            { FuncName: '設備檢修週期管理', FuncId: 'WO0403', subFuns: null }
          ]
        },
        {
          FuncName: '維護人力資訊管理',
          FuncId: 'WO05',
          subFuns: [
            { FuncName: '維修資訊統計', FuncId: 'WO0501', subFuns: null },
            { FuncName: '人員維修件數統計', FuncId: 'WO0502', subFuns: null }
          ]
        },
        {
          FuncName: '設備履歷管理',
          FuncId: 'WO06',
          subFuns: [
            { FuncName: '模組維護履歷管理', FuncId: 'WO0601', subFuns: null },
            { FuncName: '設備維護履歷管理', FuncId: 'WO0602', subFuns: null }
          ]
        }
      ]
    },
    {
      FuncName: '物料管理指標',
      FuncId: 'ML',
      subFuns: [
        {
          FuncName: '物料管理',
          FuncId: 'ML01',
          subFuns: [
            { FuncName: '物料存量管理', FuncId: 'ML0101', subFuns: null },
            { FuncName: '物料領用紀錄', FuncId: 'ML0102', subFuns: null },
            { FuncName: '物料借還記錄', FuncId: 'ML0103', subFuns: null },
            { FuncName: '物料耗用統計', FuncId: 'ML0104', subFuns: null }
          ]
        },
        {
          FuncName: '採購規劃',
          FuncId: 'ML02',
          subFuns: [{ FuncName: '年度物料採購試算', FuncId: 'ML0201', subFuns: null }]
        }
      ]
    },
    {
      FuncName: '設備可靠性指標',
      FuncId: 'EQ',
      subFuns: [
        {
          FuncName: '前台設備監控',
          FuncId: 'EQ01',
          subFuns: [
            { FuncName: '參數未進版監控', FuncId: 'EQ0101', subFuns: null },
            { FuncName: '設備離線通報', FuncId: 'EQ0102', subFuns: null },
            { FuncName: '設備事件紀錄查詢', FuncId: 'EQ0103', subFuns: null },
            { FuncName: '設備建構及狀態管理', FuncId: 'EQ0104', subFuns: null }
          ]
        },
        {
          FuncName: '中央系統設備監控',
          FuncId: 'EQ02',
          subFuns: [{ FuncName: '監控中央伺服器及網路狀態', FuncId: 'EQ0201', subFuns: null }]
        }
      ]
    },
    {
      FuncName: '儀器及手工具管理指標',
      FuncId: 'EH',
      subFuns: [
        {
          FuncName: '儀器及手工具管理',
          FuncId: 'EH01',
          subFuns: [
            { FuncName: '儀器管理績效指標', FuncId: 'EH0101', subFuns: null },
            { FuncName: '手工具管理績效指標', FuncId: 'EH0102', subFuns: null }
          ]
        }
      ]
    }
  ]
}
