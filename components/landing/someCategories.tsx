import { Grid, GridItem, Icon, IconButton, Stack } from "@chakra-ui/react";
import {
  BsPhone,
  BsCalculator,
  BsCamera,
  BsController,
  BsEarbuds,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

export default function SomeCategories() {
  const categories = useSelector((state: RootState) => state.guest.categories);
  return (
    <Stack padding="6" boxShadow="xl" borderRadius="10px">
      <Grid templateColumns="repeat(6, 3fr)" gap={6}>
        <GridItem
          w="100px"
          h="100px"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <IconButton
            bgColor="whiteAlpha.300"
            aria-label="Add to friends"
            icon={<BsPhone size={40} />}
            boxSize={20}
            boxShadow="lg"
            borderRadius="10px"
            borderColor={"blue.200"}
            borderStyle="solid"
          />
        </GridItem>
        <GridItem
          w="100px"
          h="100px"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <IconButton
            bgColor="whiteAlpha.300"
            aria-label="Add to friends"
            icon={<BsCalculator size={40} />}
            boxSize={20}
            boxShadow="lg"
            borderRadius="10px"
            borderColor={"blue.200"}
            borderStyle="solid"
          />
        </GridItem>
        <GridItem
          w="100px"
          h="100px"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <IconButton
            bgColor="whiteAlpha.300"
            aria-label="Add to friends"
            icon={<BsCalculator size={40} />}
            boxSize={20}
            boxShadow="lg"
            borderRadius="10px"
            borderColor={"blue.200"}
            borderStyle="solid"
          />
        </GridItem>
        <GridItem
          w="100px"
          h="100px"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <IconButton
            bgColor="whiteAlpha.300"
            aria-label="Add to friends"
            icon={<BsCalculator size={40} />}
            boxSize={20}
            boxShadow="lg"
            borderRadius="10px"
            borderColor={"blue.200"}
            borderStyle="solid"
          />
        </GridItem>
        <GridItem
          w="100px"
          h="100px"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <IconButton
            bgColor="whiteAlpha.300"
            aria-label="Add to friends"
            icon={<BsCamera size={40} />}
            boxSize={20}
            boxShadow="lg"
            borderRadius="10px"
            borderColor={"blue.200"}
            borderStyle="solid"
          />
        </GridItem>
        <GridItem
          w="100px"
          h="100px"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <IconButton
            bgColor="whiteAlpha.300"
            aria-label="Add to friends"
            icon={<BsCalculator size={40} />}
            boxSize={20}
            boxShadow="lg"
            borderRadius="10px"
            borderColor={"blue.200"}
            borderStyle="solid"
          />
        </GridItem>
        <GridItem
          w="100px"
          h="100px"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <IconButton
            bgColor="whiteAlpha.300"
            aria-label="Add to friends"
            icon={<BsCalculator size={40} />}
            boxSize={20}
            boxShadow="lg"
            borderRadius="10px"
            borderColor={"blue.200"}
            borderStyle="solid"
          />
        </GridItem>
        <GridItem
          w="100px"
          h="100px"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <IconButton
            bgColor="whiteAlpha.300"
            aria-label="Add to friends"
            icon={<BsController size={40} />}
            boxSize={20}
            boxShadow="lg"
            borderRadius="10px"
            borderColor={"blue.200"}
            borderStyle="solid"
          />
        </GridItem>
        <GridItem
          w="100px"
          h="100px"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <IconButton
            bgColor="whiteAlpha.300"
            aria-label="Add to friends"
            icon={<BsCalculator size={40} />}
            boxSize={20}
            boxShadow="lg"
            borderRadius="10px"
            borderColor={"blue.200"}
            borderStyle="solid"
          />
        </GridItem>
        <GridItem
          w="100px"
          h="100px"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <IconButton
            bgColor="whiteAlpha.300"
            aria-label="Add to friends"
            icon={<BsEarbuds size={40} />}
            boxSize={20}
            boxShadow="lg"
            borderRadius="10px"
            borderColor={"blue.200"}
            borderStyle="solid"
          />
        </GridItem>
        <GridItem
          w="100px"
          h="100px"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <IconButton
            bgColor="whiteAlpha.300"
            aria-label="Add to friends"
            icon={<BsCalculator size={40} />}
            boxSize={20}
            boxShadow="lg"
            borderRadius="10px"
            borderColor={"blue.200"}
            borderStyle="solid"
          />
        </GridItem>
        <GridItem
          w="100px"
          h="100px"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <IconButton
            bgColor="whiteAlpha.300"
            aria-label="Add to friends"
            icon={<BsCalculator size={40} />}
            boxSize={20}
            boxShadow="lg"
            borderRadius="10px"
            borderColor={"blue.200"}
            borderStyle="solid"
          />
        </GridItem>
      </Grid>
    </Stack>
  );
}
