import { useState, forwardRef, useImperativeHandle } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Modal.css'

const Modal = forwardRef((props: any, ref: any) => {
  const [open, setOpen] = useState<boolean>(false)

  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
      close: () => setOpen(false),
    }
  })

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1, transition: { duration: 0.3 } }}
            exit={{ opacity: 0 }}
            className='modal-backdrop'
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.3 } }}
            exit={{ y: -50, opacity: 0 }}
            className='modal__content__wrapper'
          >
            <motion.div className='modal__content'>{props.children}</motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
})

export default Modal
