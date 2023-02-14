import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Calculator.module.css";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

const Calc = () => {
  const [result, setResult] = useState("");
  const [btnName, setBtnName] = useState([
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    "C",
    "/",
    "=",
  ]);

  const [firstOperant, setFirstOperant] = useState("");
  const [operator, setOperator] = useState("");
  const [SecondOperant, setSecondOperant] = useState("");

  /*  const getData = () => {
    console.log("useEffect-->result", result);
    
  }; */

  const handClick = (e) => {
    /*  console.log(
      "firstOperant-->",
      firstOperant,
      "operator-->",
      operator,
      "SecondOperant-->",
      SecondOperant
    ); */
    if (e.target.name === "C") setResult("");
    else if (e.target.name === "=") {
      console.log("==result-->", result);
      if (result) {
        const Numbers = result.split(/[-,+,*,/]/);
        console.log("numm 1--->", Numbers);
        const arryNum = Numbers.map((num) => {
          return Number(num);
        });
        console.log("arryNum--->", arryNum);
        setFirstOperant(arryNum);
      }

      /*  if (firstOperant.length > 0) {
        console.log("firstOperant--->", firstOperant);
      } */

      /*   console.log("numm 1--->", typeof Numbers);

      const arryNum = Numbers.map((num) => {
        return Number(num);
      });
      console.log("arryNum--->", arryNum); */

      /* const operator = result.match(/[-,+,*,/]/); */
      /* if(result.split()) */
      /* console.log("operator--->", operator); */

      /*  if (operator[0] === "+") {
       
        const a = arryNum[0];
        console.log("a--->", a);
        const b = arryNum[1];
        console.log("b--->", b);
        const c = a + b;
        console.log("c--->", c);
        setResult(c);
      } else if (operator[0] === "-") {
        const a = arryNum[0];
        console.log("a--->", a);
        const b = arryNum[1];
        console.log("b--->", b);
        const c = a - b;
        console.log("c--->", c);
        setResult(c);
      } */
    } else if (!result) {
      if (
        e.target.name !== "*" &&
        e.target.name !== "/" &&
        e.target.name !== "+"
      ) {
        setFirstOperant(result.concat(e.target.name));
        setResult(result.concat(e.target.name));
      }
    } else if (result === "-") {
      if (
        e.target.name !== "*" &&
        e.target.name !== "/" &&
        e.target.name !== "+" &&
        e.target.name !== "-"
      ) {
        setFirstOperant(result.concat(e.target.name));
        setResult(result.concat(e.target.name));
      }
    } else if (result) {
      console.log(
        "firstOperant-->",
        firstOperant,
        "operator-->",
        operator,
        "SecondOperant-->",
        SecondOperant
      );
      if (
        result.charAt(result.length - 1) === "*" ||
        result.charAt(result.length - 1) === "/" ||
        result.charAt(result.length - 1) === "+" ||
        result.charAt(result.length - 1) === "-"
      ) {
        console.log("operator-->", operator);
        /*  if (!operator) */
        setOperator(result.charAt(result.length - 1));
        if (operator && firstOperant && SecondOperant) {
          debugger;
          let numberOne = firstOperant; /* ParseInt(firstOperant); */
          let numberTwo = SecondOperant; /* ParseInt(SecondOperant); */
          let total = 0;
          switch (operator) {
            case "+":
              total = numberOne + numberTwo;
              break;
            case "-":
              total = numberOne - numberTwo;
              break;
            case "*":
              total = numberOne * numberTwo;
              break;
            case "/":
              total = numberOne / numberTwo;
              break;
            default:
              break;
          }
          console.log("total", total);
          setFirstOperant(total/* .toString() */);
         /*  setSecondOperant(""); */
          setOperator("");
          setSecondOperant("");
          console.log(
            "firstOperant-->",
            firstOperant,
            "operator-->",
            operator,
            "SecondOperant-->",
            SecondOperant
          );
        }

        if (result.charAt(result.length - 1) === "-" && e.target.name === "-")
          setResult(result);
        else if (
          e.target.name !== "*" &&
          e.target.name !== "/" &&
          e.target.name !== "+"
        ) {
          console.log(
            "firstOperant-->",
            firstOperant,
            "operator-->",
            operator,
            "SecondOperant-->",
            SecondOperant
          );
          setSecondOperant(SecondOperant.concat(e.target.name));
          setResult(result.concat(e.target.name));
        } else setResult(result);
      } else {
        if (
          e.target.name !== "-" &&
          e.target.name !== "*" &&
          e.target.name !== "/" &&
          e.target.name !== "+"
        )
          setFirstOperant(result.concat(e.target.name));
        setResult(result.concat(e.target.name));
      }
    }
  };

  const handClick1 = (e) => {};

  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        ></link>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
          crossorigin="anonymous"
        ></script>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Oswald&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className={`${styles.main_container} d-flex justify-content-center`}>
        <div className={`${styles.container} `}>
          <div className="ms-3 d-flex align-items-start justify-content-start mb-1 py-2 ">
            <span className="ms-2">
              <Image
                className="ms-1 me-2"
                src="/icons2.png"
                width={"30px"}
                height={"30px"}
              />
              Calculator
            </span>
          </div>
          {/* <h1 className={styles.head_line}>calculator</h1> */}
          <div>
            <input
              className={`${styles.box_height} w-100  `}
              value={result}
              type="text"
            ></input>
          </div>
          <Row>
            {btnName.map((res) => (
              <Col xs={0} sm={0} md={12} lg={6} xl={6}>
                <button
                  className={`${styles.butto} w-100`}
                  name={res}
                  onClick={handClick}
                >
                  {res}
                </button>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Calc;
