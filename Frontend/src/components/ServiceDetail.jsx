import React from "react";
import Btn from "../components/Btn";
import { Link } from "react-router-dom";
import { Card, CardHeader, CardBody, Typography, Button } from "@material-tailwind/react";

const ServiceDetail = (props) => {
    return (
        <Card className="w-full max-w-[48rem] flex-row bg-gray-50 rounded-2xl mb-10">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src={props.image} alt="card-image" className="h-full w-full object-cover rounded-2xl"
                />
            </CardHeader>
            <CardBody className="py-4">
                <Typography variant="h6" color="gray" className="mb-4 px-5">
                    {props.title}
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2 px-5 text-justify">
                    {props.subHeading}
                </Typography>
                <Typography color="gray" className="mb-5 font-normal px-5 text-justify">
                    {props.desc}
                </Typography>
                <Link to={props.link} target="_top">
                    <Btn></Btn>
                </Link>
            </CardBody>
        </Card>
    );
}

export default ServiceDetail;