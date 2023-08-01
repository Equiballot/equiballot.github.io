import "../css/styles.css";
import "../css/viewcandidates.css";
import Navbar from "../components/Navbar.js";
import Biden from "../img/biden.svg";
import Trump from "../img/trump.svg";
import Warren from "../img/warren.svg";
import Cruz from "../img/cruz.svg";
import Bears from "../img/bears.svg";
import Caraviello from "../img/caraviello.svg";
import Collins from "../img/collins.svg";
import Graham from "../img/graham.svg";
import Hays from "../img/hays.svg";
import Knight from "../img/knight.svg";
import McLaughlin from "../img/mclaughlin.svg";
import Morell from "../img/morell.svg";
import Mustone from "../img/mustone.svg";
import Ruseau from "../img/ruseau.svg";
import Scarpelli from "../img/scarpelli.svg";
import Tseng from "../img/tseng.svg";
import { useState } from "react";
import Candidate from "../components/Candidate.js";

function ViewCandidates() {
    const [isCityCouncil, setIsCityCouncil] = useState(true);
    const [cityCouncilCandidates, setCityCouncilCandidates] = useState([
        {
            image: Morell,
            name: "Nicole Morell",
            position: "Medford City Council Candidate",
            party: "Party",
            experience: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ullamcorper a lacus vestibulum sed arcu non odio. In est ante in nibh mauris cursus mattis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Cras tincidunt lobortis feugiat vivamus at augue eget. Tristique senectus et netus et malesuada fames ac. Semper auctor neque vitae tempus quam pellentesque nec. Tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse interdum consectetur libero id faucibus. In cursus turpis massa tincidunt dui. Id aliquet risus feugiat in ante metus dictum. Iaculis urna id volutpat lacus laoreet non curabitur. Vitae sapien pellentesque habitant morbi tristique. Id aliquet risus feugiat in ante. Id porta nibh venenatis cras sed felis eget. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Quisque id diam vel quam elementum pulvinar etiam non. Pellentesque id nibh tortor id.

            Phasellus vestibulum lorem sed risus ultricies tristique. Tortor id aliquet lectus proin. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Fames ac turpis egestas integer eget aliquet. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ut sem viverra aliquet eget. Metus dictum at tempor commodo. Quis blandit turpis cursus in hac habitasse. Dignissim diam quis enim lobortis. Netus et malesuada fames ac. Vitae turpis massa sed elementum. Odio tempor orci dapibus ultrices in iaculis. Ac auctor augue mauris augue neque gravida in fermentum et. Leo a diam sollicitudin tempor id eu nisl nunc. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Cursus eget nunc scelerisque viverra mauris in. Curabitur gravida arcu ac tortor dignissim convallis aenean. Tempor orci dapibus ultrices in.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
            stanceInfo: ["Info1", "Info2", "Info3"],
        },
        {
            image: Bears,
            name: "Issac B. Bears",
            position: "Medford City Council Candidate",
            party: "Party",
            experience: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ullamcorper a lacus vestibulum sed arcu non odio. In est ante in nibh mauris cursus mattis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Cras tincidunt lobortis feugiat vivamus at augue eget. Tristique senectus et netus et malesuada fames ac. Semper auctor neque vitae tempus quam pellentesque nec. Tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse interdum consectetur libero id faucibus. In cursus turpis massa tincidunt dui. Id aliquet risus feugiat in ante metus dictum. Iaculis urna id volutpat lacus laoreet non curabitur. Vitae sapien pellentesque habitant morbi tristique. Id aliquet risus feugiat in ante. Id porta nibh venenatis cras sed felis eget. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Quisque id diam vel quam elementum pulvinar etiam non. Pellentesque id nibh tortor id.

            Phasellus vestibulum lorem sed risus ultricies tristique. Tortor id aliquet lectus proin. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Fames ac turpis egestas integer eget aliquet. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ut sem viverra aliquet eget. Metus dictum at tempor commodo. Quis blandit turpis cursus in hac habitasse. Dignissim diam quis enim lobortis. Netus et malesuada fames ac. Vitae turpis massa sed elementum. Odio tempor orci dapibus ultrices in iaculis. Ac auctor augue mauris augue neque gravida in fermentum et. Leo a diam sollicitudin tempor id eu nisl nunc. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Cursus eget nunc scelerisque viverra mauris in. Curabitur gravida arcu ac tortor dignissim convallis aenean. Tempor orci dapibus ultrices in.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
            stanceInfo: ["Info1", "Info2", "Info3"],
        },
        {
            image: Caraviello,
            name: "Richard F. Caraviello",
            position: "Medford City Council Candidate",
            party: "Democrat",
            experience: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ullamcorper a lacus vestibulum sed arcu non odio. In est ante in nibh mauris cursus mattis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Cras tincidunt lobortis feugiat vivamus at augue eget. Tristique senectus et netus et malesuada fames ac. Semper auctor neque vitae tempus quam pellentesque nec. Tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse interdum consectetur libero id faucibus. In cursus turpis massa tincidunt dui. Id aliquet risus feugiat in ante metus dictum. Iaculis urna id volutpat lacus laoreet non curabitur. Vitae sapien pellentesque habitant morbi tristique. Id aliquet risus feugiat in ante. Id porta nibh venenatis cras sed felis eget. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Quisque id diam vel quam elementum pulvinar etiam non. Pellentesque id nibh tortor id.

            Phasellus vestibulum lorem sed risus ultricies tristique. Tortor id aliquet lectus proin. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Fames ac turpis egestas integer eget aliquet. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ut sem viverra aliquet eget. Metus dictum at tempor commodo. Quis blandit turpis cursus in hac habitasse. Dignissim diam quis enim lobortis. Netus et malesuada fames ac. Vitae turpis massa sed elementum. Odio tempor orci dapibus ultrices in iaculis. Ac auctor augue mauris augue neque gravida in fermentum et. Leo a diam sollicitudin tempor id eu nisl nunc. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Cursus eget nunc scelerisque viverra mauris in. Curabitur gravida arcu ac tortor dignissim convallis aenean. Tempor orci dapibus ultrices in.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
            stanceInfo: ["Info1", "Info2", "Info3"],
        },
        {
            image: Collins,
            name: "Kit Collins",
            position: "Medford City Council Candidate",
            party: "Democrat",
            experience: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ullamcorper a lacus vestibulum sed arcu non odio. In est ante in nibh mauris cursus mattis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Cras tincidunt lobortis feugiat vivamus at augue eget. Tristique senectus et netus et malesuada fames ac. Semper auctor neque vitae tempus quam pellentesque nec. Tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse interdum consectetur libero id faucibus. In cursus turpis massa tincidunt dui. Id aliquet risus feugiat in ante metus dictum. Iaculis urna id volutpat lacus laoreet non curabitur. Vitae sapien pellentesque habitant morbi tristique. Id aliquet risus feugiat in ante. Id porta nibh venenatis cras sed felis eget. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Quisque id diam vel quam elementum pulvinar etiam non. Pellentesque id nibh tortor id.

            Phasellus vestibulum lorem sed risus ultricies tristique. Tortor id aliquet lectus proin. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Fames ac turpis egestas integer eget aliquet. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ut sem viverra aliquet eget. Metus dictum at tempor commodo. Quis blandit turpis cursus in hac habitasse. Dignissim diam quis enim lobortis. Netus et malesuada fames ac. Vitae turpis massa sed elementum. Odio tempor orci dapibus ultrices in iaculis. Ac auctor augue mauris augue neque gravida in fermentum et. Leo a diam sollicitudin tempor id eu nisl nunc. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Cursus eget nunc scelerisque viverra mauris in. Curabitur gravida arcu ac tortor dignissim convallis aenean. Tempor orci dapibus ultrices in.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
            stanceInfo: ["Info1", "Info2", "Info3"],
        },
        {
            image: Knight,
            name: "Adam Knight",
            position: "Medford City Council Candidate",
            party: "Party",
            experience: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ullamcorper a lacus vestibulum sed arcu non odio. In est ante in nibh mauris cursus mattis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Cras tincidunt lobortis feugiat vivamus at augue eget. Tristique senectus et netus et malesuada fames ac. Semper auctor neque vitae tempus quam pellentesque nec. Tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse interdum consectetur libero id faucibus. In cursus turpis massa tincidunt dui. Id aliquet risus feugiat in ante metus dictum. Iaculis urna id volutpat lacus laoreet non curabitur. Vitae sapien pellentesque habitant morbi tristique. Id aliquet risus feugiat in ante. Id porta nibh venenatis cras sed felis eget. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Quisque id diam vel quam elementum pulvinar etiam non. Pellentesque id nibh tortor id.

            Phasellus vestibulum lorem sed risus ultricies tristique. Tortor id aliquet lectus proin. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Fames ac turpis egestas integer eget aliquet. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ut sem viverra aliquet eget. Metus dictum at tempor commodo. Quis blandit turpis cursus in hac habitasse. Dignissim diam quis enim lobortis. Netus et malesuada fames ac. Vitae turpis massa sed elementum. Odio tempor orci dapibus ultrices in iaculis. Ac auctor augue mauris augue neque gravida in fermentum et. Leo a diam sollicitudin tempor id eu nisl nunc. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Cursus eget nunc scelerisque viverra mauris in. Curabitur gravida arcu ac tortor dignissim convallis aenean. Tempor orci dapibus ultrices in.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
            stanceInfo: ["Info1", "Info2", "Info3"],
        },
        {
            image: Scarpelli,
            name: "George A. Scarpelli",
            position: "Medford City Council Candidate",
            party: "Party",
            experience: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ullamcorper a lacus vestibulum sed arcu non odio. In est ante in nibh mauris cursus mattis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Cras tincidunt lobortis feugiat vivamus at augue eget. Tristique senectus et netus et malesuada fames ac. Semper auctor neque vitae tempus quam pellentesque nec. Tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse interdum consectetur libero id faucibus. In cursus turpis massa tincidunt dui. Id aliquet risus feugiat in ante metus dictum. Iaculis urna id volutpat lacus laoreet non curabitur. Vitae sapien pellentesque habitant morbi tristique. Id aliquet risus feugiat in ante. Id porta nibh venenatis cras sed felis eget. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Quisque id diam vel quam elementum pulvinar etiam non. Pellentesque id nibh tortor id.

            Phasellus vestibulum lorem sed risus ultricies tristique. Tortor id aliquet lectus proin. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Fames ac turpis egestas integer eget aliquet. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ut sem viverra aliquet eget. Metus dictum at tempor commodo. Quis blandit turpis cursus in hac habitasse. Dignissim diam quis enim lobortis. Netus et malesuada fames ac. Vitae turpis massa sed elementum. Odio tempor orci dapibus ultrices in iaculis. Ac auctor augue mauris augue neque gravida in fermentum et. Leo a diam sollicitudin tempor id eu nisl nunc. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Cursus eget nunc scelerisque viverra mauris in. Curabitur gravida arcu ac tortor dignissim convallis aenean. Tempor orci dapibus ultrices in.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
            stanceInfo: ["Info1", "Info2", "Info3"],
        },
        {
            image: Tseng,
            name: "Justin Tseng",
            position: "Medford City Council Candidate",
            party: "Democrat",
            experience: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ullamcorper a lacus vestibulum sed arcu non odio. In est ante in nibh mauris cursus mattis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Cras tincidunt lobortis feugiat vivamus at augue eget. Tristique senectus et netus et malesuada fames ac. Semper auctor neque vitae tempus quam pellentesque nec. Tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse interdum consectetur libero id faucibus. In cursus turpis massa tincidunt dui. Id aliquet risus feugiat in ante metus dictum. Iaculis urna id volutpat lacus laoreet non curabitur. Vitae sapien pellentesque habitant morbi tristique. Id aliquet risus feugiat in ante. Id porta nibh venenatis cras sed felis eget. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Quisque id diam vel quam elementum pulvinar etiam non. Pellentesque id nibh tortor id.

            Phasellus vestibulum lorem sed risus ultricies tristique. Tortor id aliquet lectus proin. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Fames ac turpis egestas integer eget aliquet. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ut sem viverra aliquet eget. Metus dictum at tempor commodo. Quis blandit turpis cursus in hac habitasse. Dignissim diam quis enim lobortis. Netus et malesuada fames ac. Vitae turpis massa sed elementum. Odio tempor orci dapibus ultrices in iaculis. Ac auctor augue mauris augue neque gravida in fermentum et. Leo a diam sollicitudin tempor id eu nisl nunc. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Cursus eget nunc scelerisque viverra mauris in. Curabitur gravida arcu ac tortor dignissim convallis aenean. Tempor orci dapibus ultrices in.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
            stanceInfo: ["Info1", "Info2", "Info3"],
        },
    ]);

    const [schoolCommitteeCandidates, setSchoolCommitteeCandidates] = useState([
        {
            image: Graham,
            name: "Jenny Graham",
            position: "Medford School Committee Candidate",
            party: "Party",
            experience: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ullamcorper a lacus vestibulum sed arcu non odio. In est ante in nibh mauris cursus mattis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Cras tincidunt lobortis feugiat vivamus at augue eget. Tristique senectus et netus et malesuada fames ac. Semper auctor neque vitae tempus quam pellentesque nec. Tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse interdum consectetur libero id faucibus. In cursus turpis massa tincidunt dui. Id aliquet risus feugiat in ante metus dictum. Iaculis urna id volutpat lacus laoreet non curabitur. Vitae sapien pellentesque habitant morbi tristique. Id aliquet risus feugiat in ante. Id porta nibh venenatis cras sed felis eget. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Quisque id diam vel quam elementum pulvinar etiam non. Pellentesque id nibh tortor id.

            Phasellus vestibulum lorem sed risus ultricies tristique. Tortor id aliquet lectus proin. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Fames ac turpis egestas integer eget aliquet. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ut sem viverra aliquet eget. Metus dictum at tempor commodo. Quis blandit turpis cursus in hac habitasse. Dignissim diam quis enim lobortis. Netus et malesuada fames ac. Vitae turpis massa sed elementum. Odio tempor orci dapibus ultrices in iaculis. Ac auctor augue mauris augue neque gravida in fermentum et. Leo a diam sollicitudin tempor id eu nisl nunc. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Cursus eget nunc scelerisque viverra mauris in. Curabitur gravida arcu ac tortor dignissim convallis aenean. Tempor orci dapibus ultrices in.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
            stanceInfo: ["Info1", "Info2", "Info3"],
        },
        {
            image: Hays,
            name: "Sharon Hays",
            position: "Medford School Committee Candidate",
            party: "Party",
            experience: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ullamcorper a lacus vestibulum sed arcu non odio. In est ante in nibh mauris cursus mattis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Cras tincidunt lobortis feugiat vivamus at augue eget. Tristique senectus et netus et malesuada fames ac. Semper auctor neque vitae tempus quam pellentesque nec. Tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse interdum consectetur libero id faucibus. In cursus turpis massa tincidunt dui. Id aliquet risus feugiat in ante metus dictum. Iaculis urna id volutpat lacus laoreet non curabitur. Vitae sapien pellentesque habitant morbi tristique. Id aliquet risus feugiat in ante. Id porta nibh venenatis cras sed felis eget. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Quisque id diam vel quam elementum pulvinar etiam non. Pellentesque id nibh tortor id.

            Phasellus vestibulum lorem sed risus ultricies tristique. Tortor id aliquet lectus proin. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Fames ac turpis egestas integer eget aliquet. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ut sem viverra aliquet eget. Metus dictum at tempor commodo. Quis blandit turpis cursus in hac habitasse. Dignissim diam quis enim lobortis. Netus et malesuada fames ac. Vitae turpis massa sed elementum. Odio tempor orci dapibus ultrices in iaculis. Ac auctor augue mauris augue neque gravida in fermentum et. Leo a diam sollicitudin tempor id eu nisl nunc. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Cursus eget nunc scelerisque viverra mauris in. Curabitur gravida arcu ac tortor dignissim convallis aenean. Tempor orci dapibus ultrices in.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
            stanceInfo: ["Info1", "Info2", "Info3"],
        },
        {
            image: McLaughlin,
            name: "Mealnie McLaughlin",
            position: "Medford School Committee Candidate",
            party: "Party",
            experience: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ullamcorper a lacus vestibulum sed arcu non odio. In est ante in nibh mauris cursus mattis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Cras tincidunt lobortis feugiat vivamus at augue eget. Tristique senectus et netus et malesuada fames ac. Semper auctor neque vitae tempus quam pellentesque nec. Tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse interdum consectetur libero id faucibus. In cursus turpis massa tincidunt dui. Id aliquet risus feugiat in ante metus dictum. Iaculis urna id volutpat lacus laoreet non curabitur. Vitae sapien pellentesque habitant morbi tristique. Id aliquet risus feugiat in ante. Id porta nibh venenatis cras sed felis eget. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Quisque id diam vel quam elementum pulvinar etiam non. Pellentesque id nibh tortor id.

            Phasellus vestibulum lorem sed risus ultricies tristique. Tortor id aliquet lectus proin. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Fames ac turpis egestas integer eget aliquet. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ut sem viverra aliquet eget. Metus dictum at tempor commodo. Quis blandit turpis cursus in hac habitasse. Dignissim diam quis enim lobortis. Netus et malesuada fames ac. Vitae turpis massa sed elementum. Odio tempor orci dapibus ultrices in iaculis. Ac auctor augue mauris augue neque gravida in fermentum et. Leo a diam sollicitudin tempor id eu nisl nunc. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Cursus eget nunc scelerisque viverra mauris in. Curabitur gravida arcu ac tortor dignissim convallis aenean. Tempor orci dapibus ultrices in.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
            stanceInfo: ["Info1", "Info2", "Info3"],
        },
        {
            image: Mustone,
            name: "Mea Quinn Mustone",
            position: "Medford School Committee Candidate",
            party: "Party",
            experience: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ullamcorper a lacus vestibulum sed arcu non odio. In est ante in nibh mauris cursus mattis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Cras tincidunt lobortis feugiat vivamus at augue eget. Tristique senectus et netus et malesuada fames ac. Semper auctor neque vitae tempus quam pellentesque nec. Tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse interdum consectetur libero id faucibus. In cursus turpis massa tincidunt dui. Id aliquet risus feugiat in ante metus dictum. Iaculis urna id volutpat lacus laoreet non curabitur. Vitae sapien pellentesque habitant morbi tristique. Id aliquet risus feugiat in ante. Id porta nibh venenatis cras sed felis eget. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Quisque id diam vel quam elementum pulvinar etiam non. Pellentesque id nibh tortor id.

            Phasellus vestibulum lorem sed risus ultricies tristique. Tortor id aliquet lectus proin. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Fames ac turpis egestas integer eget aliquet. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ut sem viverra aliquet eget. Metus dictum at tempor commodo. Quis blandit turpis cursus in hac habitasse. Dignissim diam quis enim lobortis. Netus et malesuada fames ac. Vitae turpis massa sed elementum. Odio tempor orci dapibus ultrices in iaculis. Ac auctor augue mauris augue neque gravida in fermentum et. Leo a diam sollicitudin tempor id eu nisl nunc. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Cursus eget nunc scelerisque viverra mauris in. Curabitur gravida arcu ac tortor dignissim convallis aenean. Tempor orci dapibus ultrices in.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
            stanceInfo: ["Info1", "Info2", "Info3"],
        },
        {
            image: Ruseau,
            name: "Paul Ruseau",
            position: "Medford School Committee Candidate",
            party: "Party",
            experience: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare arcu dui vivamus arcu felis bibendum ut. Malesuada pellentesque elit eget gravida cum sociis natoque penatibus. Ullamcorper a lacus vestibulum sed arcu non odio. In est ante in nibh mauris cursus mattis. Donec ac odio tempor orci dapibus ultrices in iaculis nunc. Cras tincidunt lobortis feugiat vivamus at augue eget. Tristique senectus et netus et malesuada fames ac. Semper auctor neque vitae tempus quam pellentesque nec. Tincidunt ornare massa eget egestas purus viverra accumsan. Suspendisse interdum consectetur libero id faucibus. In cursus turpis massa tincidunt dui. Id aliquet risus feugiat in ante metus dictum. Iaculis urna id volutpat lacus laoreet non curabitur. Vitae sapien pellentesque habitant morbi tristique. Id aliquet risus feugiat in ante. Id porta nibh venenatis cras sed felis eget. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Quisque id diam vel quam elementum pulvinar etiam non. Pellentesque id nibh tortor id.

            Phasellus vestibulum lorem sed risus ultricies tristique. Tortor id aliquet lectus proin. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Fames ac turpis egestas integer eget aliquet. Tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse. Ut sem viverra aliquet eget. Metus dictum at tempor commodo. Quis blandit turpis cursus in hac habitasse. Dignissim diam quis enim lobortis. Netus et malesuada fames ac. Vitae turpis massa sed elementum. Odio tempor orci dapibus ultrices in iaculis. Ac auctor augue mauris augue neque gravida in fermentum et. Leo a diam sollicitudin tempor id eu nisl nunc. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Cursus eget nunc scelerisque viverra mauris in. Curabitur gravida arcu ac tortor dignissim convallis aenean. Tempor orci dapibus ultrices in.`,
            keyStances: ["Thing1", "Thing2", "Thing3"],
            stanceInfo: ["Info1", "Info2", "Info3"],
        },
    ]);

    const changeToCityCouncil = () => {
        setIsCityCouncil(true);
    };

    const changeToSchoolCommittee = () => {
        setIsCityCouncil(false);
    };

    return (
        <div className="view-candidates">
            <Navbar />
            <main className="selection-screen">
                <div className="selectors">
                    <button
                        className="city-council"
                        onClick={changeToCityCouncil}
                    >
                        City Council
                    </button>
                    <button
                        className="school-committee"
                        onClick={changeToSchoolCommittee}
                    >
                        School Committee
                    </button>
                </div>
                <div className="candidates">
                    {isCityCouncil &&
                        cityCouncilCandidates.map((c, i) => (
                            <Candidate candidate={c} key={i} />
                        ))}
                    {!isCityCouncil &&
                        schoolCommitteeCandidates.map((c, i) => (
                            <Candidate candidate={c} key={i} />
                        ))}
                </div>
            </main>
        </div>
    );
}
export default ViewCandidates;
