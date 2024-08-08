import Component, { PageEl } from "@/components/Libs/Component";
import Copy from "@/components/Libs/Copy";
import Router from "next/router";
import Window from "@/components/Libs/Window";
import TextBox from "@/components/Libs/TextBox";
import Icon2Titles from "@/components/Libs/Icon2Titles";
import Icon3Titles from "@/components/Libs/Icon3Titles";
import { all } from "axios";
import Bold from "../Libs/Bold";
import { url } from "inspector";


export default (p) => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {
  let styles = global.style;

  global.lang = { ff: "var", ffb: "vb" };

  return (
    <div style={{ direction: "ltr", minHeight: "11vh" , }}>
      <br-x />
      <Window 
        title={"The current price of Tether (dollars)"}
        style={{ minHeight: 250, margin: 10, width: "calc(100% - 20px)" , backgroundColor:"rgba(146, 255, 178, 0.68)"}}
      >
        <div
          className="container"
          style={{  padding: 2, borderRadius: 10 ,  }}
        >
          {/* <h3 style={{ color: "blue", fontSize: 15 }}>Today's price</h3> */}
          <div>
            <div
              className="wrapper"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 1,
                marginRight: 20,
              }}
            >
              <div
                className="price-card"
                style={{
                  background: "#f3f3f3",
                  borderRadius: 10,
                  padding: 15,
                  width: 210,
                  height: 150,
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 25,
                  marginLeft: 10,
                  justifyContent: "space-between",
                  backgroundColor: "#feeaea",
                }}
              >
                <div
                  className="header"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <div
                    className="amount"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <span style={{ fontWeight: "bold", fontSize: 13 }}>
                      price :
                    </span>
                    <span
                      style={{
                        fontSize: 24,
                        marginTop: "35px",
                        fontFamily: "monospace",
                        fontWeight: 600,
                      }}
                    >
                      {(props.p.price as Number).toLocaleString("en-US")}
                    </span>
                  </div>
                  <img
                    src="/dollar.png"
                    alt=""
                    style={{
                      background: "red",
                      padding: 1,
                      height: 60,
                      width: 60,
                      textAlign: "center",
                      borderRadius: 50,
                      fontSize: 1,
                    }}
                  />
                </div>
              </div>

              <div
                className="price-card"
                style={{
                  background: "#f3f3f3",
                  borderRadius: 10,
                  padding: 15,
                  width: 210,
                  height: 150,
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 25,
                  marginLeft: 10,
                  justifyContent: "space-between",
                  backgroundColor: "#f3caff",
                }}
              >
                <div
                  className="header"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <div
                    className="amount"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <span style={{ fontWeight: "bold", fontSize: 13 }}>
                        24h price :
                    </span>
                    <span
                      style={{
                        fontSize: 24,
                        marginTop: "35px",
                        fontFamily: "monospace",
                        fontWeight: 600,
                      }}
                    >
                      {(parseFloat(props.p.diff24d) as Number).toLocaleString("en-US")} 
                    </span>
                  </div>
                  <img
                    src="/chart.png"
                    alt=""
                    style={{
                      background: "purple",
                      padding: 1,
                      height: 60,
                      width: 60,
                      textAlign: "center",
                      borderRadius: 50,
                      fontSize: 1,
                    }}
                  />
                </div>
              </div>

              <div
                className="price-card"
                style={{
                  background: "#f3f3f3",
                  borderRadius: 10,
                  padding: 15,
                  width: 210,
                  height: 150,
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 25,
                  marginLeft: 10,
                  justifyContent: "space-between",
                  backgroundColor: "#daffd9",
                }}
              >
                <div
                  className="header"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <div
                    className="amount"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <span style={{ fontWeight: "bold", fontSize: 13 }}>
                      last 7 days price:
                    </span>
                    <span
                      style={{
                        fontSize: 24,
                        marginTop: "35px",
                        fontFamily: "monospace",
                        fontWeight: 600,
                      }}
                    >
                     {(parseFloat(props.p.diff7d) as Number).toLocaleString("en-US")}
                    </span>
                  </div>
                  <img
                    src="/chart.png"
                    alt=""
                    style={{
                      background: "green",
                      padding: 1,
                      height: 60,
                      width: 60,
                      textAlign: "center",
                      borderRadius: 50,
                      fontSize: 1,
                    }}
                  />
                </div>
              </div>

              <div
                className="price-card"
                style={{
                  background: "#f3f3f3",
                  borderRadius: 10,
                  padding: 15,
                  width: 210,
                  height: 150,
                  display: "flex",
                  flexDirection: "column",
                  marginTop: 25,
                  marginLeft: 10,
                  justifyContent: "space-between",
                  backgroundColor: "#b6eaff",
                }}
              >
                <div
                  className="header"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                  }}
                >
                  <div
                    className="amount"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <span style={{ fontWeight: "bold", fontSize: 13 }}>
                      last 30 days price :
                    </span>
                    <span
                      style={{
                        fontSize: 24,
                        marginTop: "35px",
                        fontFamily: "monospace",
                        fontWeight: 600,
                      }}
                    >
                      {(parseFloat(props.p.diff30d) as Number).toLocaleString("en-US")}
                    </span>
                  </div>
                  <img
                    src="/chart.png"
                    alt=""
                    style={{
                      background: "blue",
                      padding: 1,
                      height: 60,
                      width: 60,
                      textAlign: "center",
                      borderRadius: 50,
                      fontSize: 1,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        <table className="content-table" style={{borderCollapse:"collapse", margin:"25px 0", fontSize:"15px", minWidth:"100%", borderRadius:25 , boxShadow:"0 0 20px rgba(0 , 0, 0 ,0 , 15)"}}>
          <thead>
            <tr style={{background:"#009879" , color:"#fff" , textAlign:"left", fontWeight:"bold"}}>
              <th style={{padding:"12px 15px"}}>Date</th>
              <th style={{padding:"12px 15px"}}>Average</th>
              <th style={{padding:"12px 15px"}}>Changes</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom:"1px solid #ddd" , background:"rgb(243, 243, 243)"}}>
              <td style={{padding:"12px 15px"}}>last 24h price</td>
              <td style={{padding:"12px 15px"}}>min</td>
              <td style={{padding:"12px 15px"}}>{(props.p.last24hMin as Number).toLocaleString("en-US")}</td>
            </tr>

            <tr style={{borderBottom:"1px solid #ddd" , background:"rgba(243, 243, 243, 0.45)"}}>
              <td style={{padding:"12px 15px"}}>last 24h price</td>
              <td style={{padding:"12px 15px"}}>max</td>
              <td style={{padding:"12px 15px"}}>{(props.p.last24hMax as Number).toLocaleString("en-US")}</td>
            </tr>

            <tr style={{borderBottom:"1px solid #ddd" , background:"rgb(243, 243, 243)"}}>
              <td style={{padding:"12px 15px"}}>last 7days price</td>
              <td style={{padding:"12px 15px"}}>min</td>
              <td style={{padding:"12px 15px"}}>{(props.p.last7dMin as Number).toLocaleString("en-US")}</td>
            </tr>

            <tr style={{borderBottom:"1px solid #ddd" , background:"rgba(243, 243, 243, 0.45)"}}>
              <td style={{padding:"12px 15px"}}>last 7days price</td>
              <td style={{padding:"12px 15px"}}>max</td>
              <td style={{padding:"12px 15px"}}>{(props.p.last7dMax as Number).toLocaleString("en-US")}</td>
            </tr>  

            <tr style={{borderBottom:"1px solid #ddd" , background:"rgb(243, 243, 243)"}}>
              <td style={{padding:"12px 15px"}}>last 30days price</td>
              <td style={{padding:"12px 15px"}}>min</td>
              <td style={{padding:"12px 15px"}}>{(props.p.last30dMin as Number).toLocaleString("en-US")}</td>
            </tr>  

            <tr style={{borderBottom:"1px solid #ddd" , background:"rgba(243, 243, 243, 0.45)"}}>
              <td style={{padding:"12px 15px"}}>last 30days price</td>
              <td style={{padding:"12px 15px"}}>max</td>
              <td style={{padding:"12px 15px"}}>{(props.p.last30dMax as Number).toLocaleString("en-US")}</td>
            </tr>  
        
            
          </tbody>
        </table>

      </Window>

      {/* <Window
        title={"Past changes"}
        style={{ minHeight: 250, margin: 10, width: "calc(100% - 20px)", background:"rgba(56, 209, 123, 0.54)"}}
      >
        
        <table className="content-table" style={{borderCollapse:"collapse", margin:"25px 0", fontSize:"15px", minWidth:"100%", borderRadius:25 , boxShadow:"0 0 20px rgba(0 , 0, 0 ,0 , 15)"}}>
          <thead>
            <tr style={{background:"#009879" , color:"#fff" , textAlign:"left", fontWeight:"bold"}}>
              <th style={{padding:"12px 15px"}}>Date</th>
              <th style={{padding:"12px 15px"}}>Average</th>
              <th style={{padding:"12px 15px"}}>Changes</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom:"1px solid #ddd" , background:"rgba(243, 243, 243, 0.8)"}}>
              <td style={{padding:"12px 15px"}}>last 24h price</td>
              <td style={{padding:"12px 15px"}}>min</td>
              <td style={{padding:"12px 15px"}}>{(props.p.last24hMin as Number).toLocaleString("en-US")}</td>
            </tr>

            <tr style={{borderBottom:"1px solid #ddd" , background:"rgba(243, 243, 243, 0.45)"}}>
              <td style={{padding:"12px 15px"}}>last 24h price</td>
              <td style={{padding:"12px 15px"}}>max</td>
              <td style={{padding:"12px 15px"}}>{(props.p.last24hMax as Number).toLocaleString("en-US")}</td>
            </tr>

            <tr style={{borderBottom:"1px solid #ddd" , background:"rgba(243, 243, 243, 0.8)"}}>
              <td style={{padding:"12px 15px"}}>last 7days price</td>
              <td style={{padding:"12px 15px"}}>min</td>
              <td style={{padding:"12px 15px"}}>{(props.p.last7dMin as Number).toLocaleString("en-US")}</td>
            </tr>

            <tr style={{borderBottom:"1px solid #ddd" , background:"rgba(243, 243, 243, 0.45)"}}>
              <td style={{padding:"12px 15px"}}>last 7days price</td>
              <td style={{padding:"12px 15px"}}>max</td>
              <td style={{padding:"12px 15px"}}>{(props.p.last7dMax as Number).toLocaleString("en-US")}</td>
            </tr>  
        
            
          </tbody>
        </table>     
          
      </Window> */}
    </div>
  );
};

export async function getServerSideProps(context) {
  var session = await global.SSRVerify(context);
  var {
    uid,
    name,
    image,
    imageprop,
    lang,
    cchar,
    unit,
    workspace,
    servid,
    servsecret,
    usedquota,
    quota,
    quotaunit,
    status,
    regdate,
    expid,
    role,
    path,
    devmod,
    userip,
  } = session;

  let res = await fetch("https://api.tetherland.com/currencies");
  let data = await res.json();
  let p = data.data.currencies.USDT;

  console.log("priceeeeee", p);

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      }),
    },
  };
}
